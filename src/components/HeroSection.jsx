import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../components/Colours";
import ThemeToggler from "./ThemeToggler";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import sunny from "./Images/sunnySky.jpg";
import cloudy from "./Images/cloudySky.jpg";
import clearSky from "./Images/clearSky.jpg";
import rain from "./Images/rain.jpg";
import snow from "./Images/snow.jpg";
import earth from "./Images/earth.jpg";
import WaterDropSharpIcon from "@mui/icons-material/WaterDropSharp";
import AirSharpIcon from "@mui/icons-material/AirSharp";
import ThermostatAutoSharpIcon from "@mui/icons-material/ThermostatAutoSharp";
import TireRepairSharpIcon from "@mui/icons-material/TireRepairSharp";
import WbTwilightSharpIcon from "@mui/icons-material/WbTwilightSharp";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import { motion } from "framer-motion";

const HeroSection = ({
  data,
  info,
  weatherType,
  sunriseTime,
  sunsetTime,
  inputCity,
  handleKeyDown,
  handleCombinedEvents,
  setInputCity,
  city,
}) => {
  // State to store the weather image
  const [weatherImage, setWeatherImage] = useState(null);

  // Get the current theme using useContext hook and the ThemeContext
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme]; // Get the corresponding theme configuration from the AppTheme object

  // UseEffect hook to set the weather image based on weatherType
  useEffect(() => {
    // Determine the weather image based on the weatherType description
    if (
      weatherType?.description === "overcast clouds" ||
      weatherType?.description === "scattered clouds" ||
      weatherType?.description === "broken clouds" ||
      weatherType?.description === "few clouds"
    ) {
      setWeatherImage(cloudy);
    } else if (weatherType?.description === "clear sky") {
      setWeatherImage(clearSky);
    } else if (
      weatherType?.description === "moderate rain" ||
      weatherType?.description === "light rain"
    ) {
      setWeatherImage(rain);
    } else if (weatherType?.description === "sunny") {
      setWeatherImage(sunny);
    } else if (
      weatherType?.description === "snow" ||
      weatherType?.description === "light snow"
    ) {
      setWeatherImage(snow);
    } else {
      setWeatherImage(earth);
    }
  }, [weatherType]);

  // Function to handle city input change
  const handleCityChange = (event) => {
    setInputCity(event.target.value);
  };

  return (
    // Container with theme-specific styles for the hero section
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: "0.5" } }}
      maxWidth={false}
      className="body"
      style={{
        background: `${currentTheme.Herobackground}`, // Set the background color based on the theme
        color: `${currentTheme.Heroforeground}`, // Set the text color based on the theme
        textAlign: "center",
      }}
    >
      <Box id="getInput">
        <TextField
          id="inputWeather"
          type="text"
          value={inputCity}
          onChange={handleCityChange}
          placeholder="Enter the City"
          onKeyDown={handleKeyDown}
          list="suggestions"
        />
        <Button
          id="button"
          type="submit"
          className="buttonWeather"
          onClick={handleCombinedEvents}
        >
          Search
        </Button>
      </Box>
      {/* Component to toggle between light and dark theme */}
      <ThemeToggler />
      {/* Box containing weather details */}
      <Box id={city ? "contentflex" : "contentNone"}>
        <Box id="weatherDetails">
          <img src={weatherImage} alt="sunny" />
          <Typography id="cityName">
            {" "}
            {data?.city?.name}, {data?.city?.country}
          </Typography>
          <Typography id="weatherNumber">
            {Math.round(info?.main?.temp)}°C
          </Typography>
          <Typography variant="h5">({weatherType?.description})</Typography>
        </Box>
        {/* Box containing additional weather information */}
        <Box id="weatherContent">
          <form>
            <Typography id="weatherInfo">
              <WaterDropSharpIcon /> Humidity: {info?.main?.humidity}%
            </Typography>
            <Typography id="weatherInfo">
              <AirSharpIcon /> Wind: {info?.wind?.speed} km/h
            </Typography>
            <Typography id="weatherInfo">
              <ThermostatAutoSharpIcon /> Min. Temperature:{" "}
              {info?.main?.temp_min}°C
            </Typography>
            <Typography id="weatherInfo">
              <ThermostatAutoSharpIcon /> Max. Temperature:{" "}
              {info?.main?.temp_max}°C
            </Typography>
            <Typography id="weatherInfo">
              <TireRepairSharpIcon /> Pressure: {info?.main?.pressure} hpa
            </Typography>
            <Typography id="weatherInfo">
              <WbSunnySharpIcon /> Sunrise: {sunriseTime} AM
            </Typography>
            <Typography id="weatherInfo">
              <WbTwilightSharpIcon /> Sunset: {sunsetTime} PM
            </Typography>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
