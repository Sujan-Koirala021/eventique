const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('./models/User');
const Event = require('./models/Event'); // Import Event model
const { Permit } = require('permitio');

dotenv.config();
const permit = new Permit({
  // you'll have to set the PDP url to the PDP you've deployed in the previous step
  pdp: 'http://localhost:7766',
  token: process.env.PERMIT_KEY,
});


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// User Registration Route
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, username, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, username, email, password: hashedPassword, role });

    await newUser.save();

    // After saving the user, sync with Permit.io
    const { user } = await permit.api.users.sync({
      key: email,   // Assuming email can be used as the key
      email,
      first_name: firstName,
      last_name: lastName,
    });

    // Optionally, assign role after syncing
    const roleAssignment = await permit.api.users.assignRole({
      user: email,
      role,
      tenant: 'default',  // Adjust tenant if needed
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Event Route
app.post('/api/events', async (req, res) => {
  const { title, createdBy, description, date } = req.body;

  try {
    const newEvent = new Event({ title, createdBy, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch Events Route
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Event Route
app.delete('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Check Permission Route
app.post('/api/check-permission-create', async (req, res) => {
  const { email } = req.body;

  try {
    // Perform permission check using permit.io
    const permitted = await permit.check(email, 'create', 'event'); // Adjust 'event' as needed

    res.status(200).json({ permitted });
  } catch (error) {
    console.error('Error checking permission:', error);
    res.status(500).json({ error: 'Error checking permission' });
  }
});

// Check Permission Route
app.post('/api/check-permission-delete', async (req, res) => {
  const { email } = req.body;

  try {
    // Perform permission check using permit.io
    const permitted = await permit.check(email, 'delete', 'event'); // Adjust 'event' as needed

    res.status(200).json({ permitted });
  } catch (error) {
    console.error('Error checking permission:', error);
    res.status(500).json({ error: 'Error checking permission' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
