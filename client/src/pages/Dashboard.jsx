import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [isFormVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    createdBy: '',
    description: '',
    date: ''
  });

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
      const response = await axios.post('http://localhost:5000/api/events', formData); // Adjust the URL as needed
      console.log('Event created:', response.data);
      toggleFormVisibility(); // Close the form after successful submission
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };
  



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className={`flex-1 bg-white ${isFormVisible ? 'blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Content goes here */}
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card Example */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Event 1</h3>
                  <p className="text-gray-700">Description of event 1.</p>
                  <div className="flex space-x-2 mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
                {/* Repeat similar cards for other events */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Event 2</h3>
                  <p className="text-gray-700">Description of event 2.</p>
                  <div className="flex space-x-2 mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Event 3</h3>
                  <p className="text-gray-700">Description of event 3.</p>
                  <div className="flex space-x-2 mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={toggleFormVisibility}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
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

    </div>
  );
}

export default Dashboard;