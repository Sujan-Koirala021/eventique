// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Post = require('./models/BlogPost');
const dotenv = require('dotenv');

dotenv.config()

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

// Create Post Route
app.post('/api/posts', async (req, res) => {
    const { user, title, content } = req.body;

    try {
        const newPost = new Post({ user, title, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Fetch Posts Route
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
