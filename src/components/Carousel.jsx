import { useEffect, useState } from "react";

const slides = [
  {
    image: "/carousel/slide1.jpeg",
    caption: "Experience Weather Like Never Before",
  },
  {
    image: "/carousel/slide2.jpeg",
    caption: "Real-time Conditions, Beautiful Visuals",
  },
  {
    image: "/carousel/slide3.jpeg",
    caption: "Stay Prepared with Accurate Forecasts",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 max-w-5xl mx-auto mt-8 overflow-hidden shadow-lg rounded-2xl sm:h-96">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="px-4 text-2xl font-bold text-center text-white sm:text-4xl">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
