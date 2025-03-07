import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary/30 backdrop-blur-lg shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-primary tracking-wide">
          Arvind
        </Link>

        {/* Menu Button */}
        <button
          className="text-primary text-3xl focus:outline-none transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-6 top-16 w-52 bg-secondary/90 backdrop-blur-md rounded-xl shadow-xl py-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul className="flex flex-col space-y-2 text-white text-lg">
                {navItems.map((item) => (
                  <li key={item} className="px-6 py-2 hover:bg-primary/30 rounded-lg transition-all">
                    <Link
                      to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      className={`px-4 py-2 flex items-center transition-all ${
                        location.pathname === `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`
                          ? "text-primary font-semibold"
                          : "hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
