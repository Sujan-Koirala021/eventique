import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

function Dashboard() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    createdBy: '',
    description: '',
    date: ''
  });
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      } else {
        console.error('Email not found in local storage');
      }
    };

    fetchEmail();
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/events', formData);
      console.log('Event created:', response.data);
      toggleFormVisibility();
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
    }
        // Clear form after submit
        setFormData({
          title: '',
          createdBy: '',
          description: '',
          date: ''
        });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post('http://localhost:5000/api/check-permission-delete', { email });
      if (response.data.permitted) {
        await axios.delete(`http://localhost:5000/api/events/${id}`);
        fetchEvents();
      } else {
        alert('User is not permitted to delete events.');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const checkPermissionAndToggleVisibility = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/check-permission-create', { email });
      if (response.data.permitted) {
        toggleFormVisibility();
      } else {
        alert('User is not permitted to create events.');
      }
    } catch (error) {
      console.error('Error checking permission:', error);
    }
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className={`flex-1 bg-white ${isFormVisible ? 'blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.length === 0 ? (
                  <p className="text-5xl text-gray-500 col-span-1 sm:col-span-2 lg:col-span-3 text-center">No events present</p>
                ) : (
                  events.map((event) => (
                    <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="px-6 py-4">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="flex items-center text-gray-700 mb-2">
                          <FaUser className="mr-2" /> {event.createdBy}
                        </p>
                        <p className="flex items-center text-gray-700 mb-4">
                          <FaCalendarAlt className="mr-2" /> {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="px-6 py-4 bg-gray-100 flex justify-end">
                        <button
                          onClick={() => handleViewDetails(event)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={checkPermissionAndToggleVisibility}
          className={`fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 ${isFormVisible ? 'hidden' : ''}`}
        >
          + New Event
        </button>
      </main>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg mx-4">
            <h2 className="text-2xl font-bold mb-6">Add New Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Created By</label>
                <input
                  type="text"
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleFormVisibility}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">{selectedEvent.title}</h3>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <button
              onClick={handleCloseDetails}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
