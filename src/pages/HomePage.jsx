import { Button } from "../components/ui/button"; // Ensure this path is correct
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl flex flex-col items-center text-center"
      >
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Arvind"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Arvind
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
          Aspiring Data Analyst | Tableau Enthusiast | Python & SQL Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50">
            View My Projects
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-500/50">
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com/AravAravind"
            target="_blank"
            className="text-gray-400 hover:text-white text-3xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/arav-r"
            target="_blank"
            className="text-gray-400 hover:text-white text-3xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
