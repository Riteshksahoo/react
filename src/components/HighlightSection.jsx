import React from "react";
import { motion } from "framer-motion";

export default function HighlightSection() {
  return (
    <section className="flex flex-col items-center max-w-6xl gap-8 px-4 mx-auto mt-16 md:flex-row">
      <motion.div
        className="w-full overflow-hidden shadow-lg md:w-1/2 rounded-xl"
        whileHover={{ scale: 1.03 }}
      >
        <img src="/highlight/photo.png" alt="Highlight" className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-full space-y-4 text-white md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold">Stay Ahead with Weatherly Insights</h3>
        <p className="text-lg">
          Get personalized weather insights, timely notifications, and visual updates
          wherever you are. With Weatherly, you're always prepared—rain or shine, snow
          or storm.
        </p>
        <p className="text-lg font-medium">
          Explore detailed forecasts, curated tips, and weather-related news tailored
          to your location.
        </p>
      </motion.div>
    </section>
  );
}