import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCog, FaUser } from 'react-icons/fa';

const Main = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className={`bg-blue-500 w-64 p-4 ${isSidebarOpen ? 'block' : 'hidden'} sm:block`}>
                <div className="text-white text-2xl font-bold">Dashboard</div>
                <nav className="mt-4">
                    <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-700">
                        <FaHome className="mr-2" /> Home
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-700">
                        <FaChartBar className="mr-2" /> Analytics
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-700">
                        <FaCog className="mr-2" /> Settings
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-700">
                        <FaUser className="mr-2" /> Profile
                    </a>
                </nav>
            </aside>

            <div className="flex-1 p-4">
                <div className="sm:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="bg-blue-500 p-2 text-white"
                    >
                        ☰
                    </button>
                </div>

                {/* Main Content Area */}
                <h2>2,000+
                    Candidates
                    Trained</h2>
            </div>
        </div>
    );
};

export default Main;
