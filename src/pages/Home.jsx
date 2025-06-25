import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import IntroSection from "../components/IntroSection";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ImportantCities from "../components/ImportantCities";
import HighlightSection from "../components/HighlightSection";
import NewsSection from "../components/NewsSection";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySelect = async (city) => {
    const apiKey = "5713437e98df37342515284926356204";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${apiKey}&units=metric`;
    try {
      const res = await axios.get(url);
      setWeatherData(res.data);
    } catch (err) {
      console.error("City Select Error:", err);
    }
  };

  // Search from top nav bar
  const handleSearchFromHeader = (data) => {
    setWeatherData(data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = "5713437e98df37342515284926356204";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const res = await axios.get(url);
        setWeatherData(res.data);
      },
      (error) => {
        console.warn("Geolocation error:", error);
      }
    );
  }, []);

  return (
    <div className="px-4 pt-8">
      <Hero />
      <Carousel />
      <IntroSection />
      <SearchBar onCitySelect={handleCitySelect} />
      <WeatherCard weather={weatherData} />
      <ImportantCities onCitySelect={handleCitySelect} />
      <HighlightSection />
      <NewsSection />
    </div>
  );
}
