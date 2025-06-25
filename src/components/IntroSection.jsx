import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="flex flex-col items-center max-w-5xl gap-8 px-4 mx-auto mt-12 md:flex-row">
      {/* 👈 Animated Text Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-white">
          Get real-time weather reports, music, and more!
        </h2>
        <p className="text-gray-400">
          Weatherly gives you live updates, city-specific details, and stunning visuals based on real-time conditions.
        </p>
      </motion.div>

      {/* Hoverable Image Section */}
      <div className="md:w-1/2">
        <img
          src="/cityCTA/weather-info.jpeg"
          alt="Weather Info"
          className="transition-transform duration-500 transform shadow-lg rounded-xl hover:scale-105 hover:shadow-xl"
        />
      </div>
    </section>
  );
}
