import React from "react";
import cityList from "../data/city.json"; // Contains city data with lat/lon
import { motion } from "framer-motion";

export default function ImportantCities({ onCitySelect }) {
  return (
    <div className="mx-auto mt-16 max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold text-center text-white">🌍 Explore Important Cities</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cityList.map((city) => (
          <motion.div
            key={city.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden border shadow-lg cursor-pointer rounded-xl border-white/10 backdrop-blur-md"
            onClick={() => onCitySelect(city)}
          >
            {/* Background Image */}
            <div
              className="h-40 bg-center bg-cover"
              style={{
                backgroundImage: `url(/cities/${city.image}.png)`,
              }}
            ></div>

            {/* Overlay Text */}
            <div className="p-4 text-center text-white bg-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold">{city.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
