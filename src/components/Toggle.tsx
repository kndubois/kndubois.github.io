import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Toggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
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
        />
      </motion.div>
    </motion.button>
  );
}
