import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchBar({ onCitySelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const fetchCities = async (q) => {
    if (!q || q.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        {
          headers: {
            "X-RapidAPI-Key": "3fd3083af1msh1199b1735f16a1bp15e09ejsn7117db1fe29e",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
          params: {
            namePrefix: q,
            limit: 10,
            sort: "-population",
            types: "CITY",
          },
        }
      );
      const data = res.data.data || [];
      console.log("Fetched city results:", data);
      setSuggestions(data);
    } catch (err) {
      console.error("GeoDB Error:", err);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounce logic
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fetchCities(query);
    }, 300);
    return () => clearTimeout(timeoutRef.current);
  }, [query]);

  const handleSelect = (city) => {
    const name = city.name;
    setQuery(`${name}, ${city.countryCode}`);
    setSuggestions([]);
    onCitySelect({
      name,
      latitude: city.latitude,
      longitude: city.longitude,
    });
  };

  return (
    <div className="relative max-w-xl mx-auto mt-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city..."
        className="w-full p-4 text-white placeholder-gray-400 border shadow-lg bg-white/10 rounded-xl border-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-skyBlue"
      />

      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 border shadow-lg bg-black/50 backdrop-blur-md rounded-xl border-white/20"
          >
            {suggestions.map((city) => (
              <li
                key={city.id}
                onClick={() => handleSelect(city)}
                className="px-4 py-2 transition cursor-pointer hover:bg-white/20"
              >
                {city.name}, {city.region || city.countryCode}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {loading && (
        <p className="mt-2 text-sm text-center text-gray-300">Searching...</p>
      )}
    </div>
  );
}
