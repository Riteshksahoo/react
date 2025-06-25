import React from "react";
import { motion } from "framer-motion";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
    weather: weatherArray,
    sys: { sunrise, sunset },
  } = weather;

  const description = weatherArray[0]?.description;
  const mainWeather = weatherArray[0]?.main?.toLowerCase();

  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formatTime = (unixTime) =>
    new Date(unixTime * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const backgroundMap = {
    clear: "clear.jpeg",
    clouds: "cloudy.jpeg",
    rain: "rain.jpeg",
    snow: "snow.jpeg",
    haze: "haze.jpeg",
    mist: "haze.jpeg",
    drizzle: "rain.jpeg",
    thunderstorm: "rain.jpeg",
  };

  const bgImage = backgroundMap[mainWeather] || "default.jpeg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4"
    >
      <div className="max-w-5xl mx-auto mt-8 overflow-hidden border shadow-2xl rounded-2xl border-white/20 backdrop-blur-lg bg-white/10">
        {/* 🔁 Background INSIDE the card */}
        <div
          className="relative bg-center bg-cover"
          style={{
            backgroundImage: `url(/weather-bg/${bgImage})`,
          }}
        >
          {/* Glass Overlay */}
          <div className="px-10 py-10 space-y-6 text-center text-white backdrop-blur-md bg-black/40">
            {/* City */}
            <h2 className="text-4xl font-bold text-blue-300">📍 {name}</h2>

            {/* Date */}
            <p className="text-xl text-gray-200">{currentDate}</p>

            {/* Temperature */}
            <p className="font-extrabold text-white text-7xl">
              {Math.round(temp)}°C
            </p>

            {/* Feels Like */}
            <p className="text-2xl italic text-gray-300">
              Feels Like: {Math.round(feels_like)}°
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-6 text-2xl font-medium">
              <p>💧 Humidity: {humidity}%</p>
              <p>💨 Wind: {speed} m/s</p>
              <p>📊 Pressure: {pressure} hPa</p>
              <p>☁️ {description}</p>
            </div>

            {/* Sunrise & Sunset */}
            <div className="flex justify-center gap-8 mt-6 text-lg text-gray-200">
              <p>🌅 Sunrise: {formatTime(sunrise)}</p>
              <p>🌇 Sunset: {formatTime(sunset)}</p>
            </div>

            {/* UV */}
            <div className="mt-4 text-lg italic text-yellow-300">
              🦁 UV Index: <span>Data not available in free API</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
