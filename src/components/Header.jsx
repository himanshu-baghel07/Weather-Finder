import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../components/Colours";
import { Box, Container } from "@mui/material"; // Importing Box and Container components from Material-UI
import { motion } from "framer-motion"; // Importing the motion object from Framer Motion

const Header = () => {
  // Get the current theme using useContext hook and the ThemeContext
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme]; // Get the corresponding theme configuration from the AppTheme object

  return (
    // Container with theme-specific styles for the header
    <Container
      maxWidth={false}
      style={{
        background: `${currentTheme.Headerbackground}`, // Set the background color based on the theme
        color: `${currentTheme.Headerforeground}`, // Set the text color based on the theme
      }}
    >
      <Box id="heading">
        {" "}
        {/* Box component for styling */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: "0.5", delay: "0.5" },
          }} // Framer Motion animation for the heading
          className="weatherHeading" // CSS class name for the heading
        >
          Weather Finder
        </motion.h1>
      </Box>
    </Container>
  );
};

export default Header;
