import { createContext } from "react"; // Importing createContext from React

// Creating a context with default values for the theme and setTheme function
const ThemeContext = createContext(["dark", () => {}]);

export default ThemeContext;
