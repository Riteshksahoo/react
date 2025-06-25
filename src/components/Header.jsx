import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city) return;
    try {
      const apiKey = "5713437e98df37342515284926356204";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get(url);
      if (onSearch) onSearch(response.data);
    } catch (error) {
      alert("City not found. Try again.");
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#123c3a] to-[#45635e] shadow-md rounded-b-md">
      <h1 className="text-2xl font-bold text-white">Weatherly</h1>

      {/* Nav Links */}
      <nav className="flex gap-6 font-medium text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>

      {/* Search */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-3 py-1 rounded-md bg-[#45635e] text-white outline-none border border-white/20"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-1 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}
