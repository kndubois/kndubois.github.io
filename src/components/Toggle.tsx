import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Toggle() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <motion.div
      className="theme-toggle"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={onKeyDown}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="toggle-track"
        animate={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className="toggle-thumb"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>
    </motion.div>
  );
}
