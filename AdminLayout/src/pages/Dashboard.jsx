import React, { useState, useEffect } from "react";
import Overview from "../components/Overview";
import imgAvatar from "../assets/3_Data/Lab_05/Avatar (1).png";
import imgSearch from "../assets/3_Data/Lab_05/Search.png";
import imgBell from "../assets/3_Data/Lab_05/Bell 1.png";
import imgQuestion from "../assets/3_Data/Lab_05/Question 1.png";
import imgDow from "../assets/3_Data/Lab_05/Download.png";
import imgImport from "../assets/3_Data/Lab_05/Move up.png";
import impDetail from "../assets/3_Data/Lab_05/File text 1.png";

const Dashboard = () => {
    const [stats, setStats] = useState({
        turnover: { value: 0, change: 5.33 },
        profit: { value: 0, change: 5.33 },
        newCustomers: { value: 0, change: 6.84 },
    });


    return (
        <div className="p-6">
            <header className="flex justify-between items-center mb-8 border-b">
                <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-2 px-4 pr-10 border border-gray-200 rounded-md w-48"
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400">
                            <img src={imgSearch} alt="" />
                        </span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <img src={imgBell} alt="" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <img src={imgQuestion} alt="" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <img src={imgAvatar} alt="" />
                    </div>
                </div>
            </header>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <Overview stats={stats} />
            </section>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <img src={impDetail} alt="" />
                        <h2 className="text-xl font-bold text-black">Detailed report</h2>    
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center px-4 py-2 bg-white border rounded text-pink-500 border-pink-500">
                            <span className="mr-2">➕</span> Add
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white border border-pink-500 rounded text-pink-500 ">
                            <span className="mr-2">
                                <img src={imgImport} alt="" />
                            </span> Import
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white border border-pink-500 rounded text-pink-500">
                            <span className="mr-2">
                                <img src={imgDow} alt="" />
                            </span> Export
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
