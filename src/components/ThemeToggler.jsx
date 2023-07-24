import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext); // Get the current theme and the function to set the theme from the ThemeContext

  return (
    <div>
      {themeMode === "light" ? ( // If the current theme is light, show the dark mode (moon) icon
        <DarkModeIcon
          onClick={() => {
            setThemeMode("dark"); // When clicked, set the theme to dark mode
          }}
          sx={{ color: "white", fontSize: "2rem", cursor: "pointer" }} // Styles for the dark mode icon
        />
      ) : (
        // If the current theme is dark, show the light mode (sun) icon
        <WbSunnyIcon
          onClick={() => {
            setThemeMode("light"); // When clicked, set the theme to light mode
          }}
          sx={{ color: "yellow", fontSize: "2rem", cursor: "pointer" }} // Styles for the light mode icon
        />
      )}
    </div>
  );
};

export default ThemeToggler;
