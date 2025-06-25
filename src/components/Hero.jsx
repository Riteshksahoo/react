import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="mt-12 mb-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold tracking-wide text-white">WEATHERLY</h1>
      <p className="mt-4 text-lg text-gray-300">
        Find live weather updates with music and video.
      </p>
    </motion.section>
  );
}
