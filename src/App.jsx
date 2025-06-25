import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySearch = (data) => {
    setWeatherData(data);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className="text-white">
          <Header onSearch={handleCitySearch} />
        </header>
        <main className="flex-grow px-4 pt-20 text-white bg-body-gradient">
          <AppRoutes searchedWeather={weatherData} />
        </main>
        <footer className="text-white bg-footer-gradient">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
