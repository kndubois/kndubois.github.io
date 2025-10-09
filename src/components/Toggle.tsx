import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Toggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); 
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="toggle-track"
        animate={{
          justifyContent: theme === "dark" ? "flex-end" : "flex-start",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className="toggle-thumb"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <span className="toggle-icon">{theme === "light" ? "☀️" : "🌙"}</span>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}