import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCog, FaUser } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const Main = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
<div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-gray-200 w-64 fixed top-0 left-0 overflow-y-auto transition-all duration-300 z-50">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <ul>
            <li className="mb-2"><a href="#" className="hover:bg-gray-700 rounded-md px-4 py-2 block">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:bg-gray-700 rounded-md px-4 py-2 block">Analytics</a></li>
            <li className="mb-2"><a href="#" className="hover:bg-gray-700 rounded-md px-4 py-2 block">Reports</a></li>
            <li className="mb-2"><a href="#" className="hover:bg-gray-700 rounded-md px-4 py-2 block">Settings</a></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        {/* Content area */}
        <div className="p-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard!</h2>
            <p>This is the main content area of your dashboard.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
