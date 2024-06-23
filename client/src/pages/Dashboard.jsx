import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header> */}
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-600 text-white hidden md:block">
          {/* <div className="px-6 py-4"> */}
            {/* <div className="text-xl font-semibold">Event Management</div> */}
          {/* </div> */}
          <nav className="px-4">
            <ul>
              <li className="py-2"><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
              <li className="py-2"><a href="#" className="text-blue-200 hover:text-white">Events</a></li>
              <li className="py-2"><a href="#" className="text-blue-200 hover:text-white">Participants</a></li>
              <li className="py-2"><a href="#" className="text-blue-200 hover:text-white">Settings</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Content goes here */}
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg h-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Card Example */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Event 1</h3>
                    <p className="text-gray-700">Description of event 1.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                  {/* Repeat similar cards for other events */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Event 2</h3>
                    <p className="text-gray-700">Description of event 2.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Event 3</h3>
                    <p className="text-gray-700">Description of event 3.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
