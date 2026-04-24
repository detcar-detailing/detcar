import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getSystemPreference = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme ? storedTheme : getSystemPreference();
    setIsDarkMode(initialTheme === "dark");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button onClick={handleThemeToggle}>
      {isDarkMode ? <Sun /> : <MoonStar />}
    </Button>
  );
};

export default ThemeSwitcher;
