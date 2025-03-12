import React, { useState } from "react";
import Slider2 from "../assets/3_Data/Lab02/Slider 2.png";
import notice from "../assets/3_Data/Lab02/Image 105.png";
import Rating18 from "../assets/3_Data/Lab02/Rating 18.png";
import Rating19 from "../assets/3_Data/Lab02/Rating 19.png";
import Rating20 from "../assets/3_Data/Lab02/Rating 20.png";
import Rating16 from "../assets/3_Data/Lab02/Rating 16.png";
import Rating17 from "../assets/3_Data/Lab02/Rating 17.png";

function Content() {
  const [filters, setFilters] = useState({
    panFried: false,
    grilled: false,
    roasted: false,
    steamed: false,
    baked: false,
    stirFried: false,
  });

  const ratingImages = {
    16: Rating16,
    17: Rating17,
    18: Rating18,
    19: Rating19,
    20: Rating20,
  };

  const [ratings, setRatings] = useState({
    rating1: false,
    rating2: false,
    rating3: false,
    rating4: false,
    rating5: false,
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleRatingChange = (e) => {
    setRatings({
      ...ratings,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <main className="w-[96vw] flex p-6 gap-8">
      {/* Sidebar Filters */}
      <aside className="w-64 p-5 border border-gray-300 rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>

        {/* Type Filters */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Type</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {["Pan-fried", "Grilled", "Roasted", "Steamed", "Baked", "Stir-fried"].map((type, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  name={type.toLowerCase().replace("-", "")}
                  checked={filters[type.toLowerCase().replace("-", "")]}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Time Slider */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Time</h4>
          <span className="text-gray-600 block mb-2">10 minutes - 60 minutes</span>
          <img src={Slider2} alt="Slider" className="w-full" />
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Rating</h4>
          <div className="flex gap-2">
            {[18, 17, 19, 20, 16].map((num, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  name={`rating${index + 1}`}
                  checked={ratings[`rating${index + 1}`]}
                  onChange={handleRatingChange}
                  className="mr-2"
                />
                <img src={ratingImages[num]} alt={`Rating ${num}`} className="w-6 h-6" />
              </label>
            ))}
          </div>
        </div>

        <button className="w-full py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600">
          Apply
        </button>
      </aside>

      {/* No Results Section */}
      <section className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sorry, no results were found for <span className="text-pink-500 font-bold">"cakescascsa"</span>
        </h2>
        <img src={notice} alt="No Results" className="w-56 mb-4" />
        <p className="text-gray-600 text-lg mb-6">We have all your Independence Day sweets covered.</p>

        {/* Suggestions */}
        <div className="flex gap-3">
          {[
            { name: "Sweet Cake", bgColor: "bg-pink-200", textColor: "text-pink-600" },
            { name: "Black Cake", bgColor: "bg-indigo-200", textColor: "text-indigo-600" },
            { name: "Pizza Varie", bgColor: "bg-pink-300", textColor: "text-pink-600" },
            { name: "Healthy food", bgColor: "bg-teal-200", textColor: "text-teal-700" },
          ].map((tag, index) => (
            <a key={index} href="#" className={`px-4 py-2 rounded-full text-sm font-semibold ${tag.bgColor} ${tag.textColor} hover:bg-opacity-80`}>
              {tag.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Content;
