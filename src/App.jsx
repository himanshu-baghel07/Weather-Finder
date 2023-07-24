import axios from "axios"; // Importing Axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing React hooks
import { toast, ToastContainer } from "react-toastify"; // Importing React Toastify for displaying notifications
import "react-toastify/dist/ReactToastify.css"; // Importing styles for React Toastify

import "./App.css"; // Importing custom CSS styles
import Header from "./components/Header"; // Importing the Header component
import HeroSection from "./components/HeroSection"; // Importing the HeroSection component
import ThemeContext from "./context/ThemeContext"; // Importing the ThemeContext

const App = () => {
  const themeHook = useState("light"); // Setting up a state hook for theme
  const apiKey = "7c53bdff8ab52fc1a63f6f4f3ce18fb0"; // API key for OpenWeatherMap

  // States for storing weather data
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});
  const [inputCity, setInputCity] = useState("");
  const [weatherType, setWeatherType] = useState({});
  const [sunRise, setSunRise] = useState({});
  const [sunSet, setSunSet] = useState({});
  const [sunriseTime, setSunriseTime] = useState("");
  const [sunsetTime, setSunsetTime] = useState("");
  const [city, setCity] = useState("");

  // Function to fetch weather details using OpenWeatherMap API
  const weatherDetails = (cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=metric&appid=" +
      apiKey;

    axios
      .get(apiUrl)
      .then((res) => {
        // Set the weather data in the state
        setData(res.data);

        // Extract and set information about the weather
        const info = res.data.list[0];
        setInfo(info);

        // Extract and set the weather type
        const weatherType = res.data.list[0].weather[0];
        setWeatherType(weatherType);

        // Extract and set sunrise and sunset times
        const sunRise = res.data.city.sunrise;
        setSunRise(sunRise);

        const sunSet = res.data.city.sunset;
        setSunSet(sunSet);
      })
      .catch((error) => {
        console.log("Error:", error);
        // Show a toast notification when a city is not found
        toast("City not found", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  // Function to handle form submission for weather search
  const handleSubmit = () => {
    weatherDetails(inputCity);
    setInputCity("");
    setCity(inputCity);
  };

  // Function to handle 'Enter' key press for weather search
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      weatherDetails(inputCity);
      setInputCity("");
      setCity(inputCity);
    }
  };

  // Function to convert UNIX timestamps to local time for sunrise and sunset
  const handleTime = () => {
    const unixTimestamp = parseInt(sunRise);
    const date = new Date(unixTimestamp * 1000);
    const localTime = date.toLocaleTimeString();
    setSunriseTime(localTime);

    const unixTimestampTwo = parseInt(sunSet);
    const dateTwo = new Date(unixTimestampTwo * 1000);
    const localTimeTwo = dateTwo.toLocaleTimeString();
    setSunsetTime(localTimeTwo);
  };

  // Function to handle combined events (e.g., handling time and submitting form)
  const handleCombinedEvents = () => {
    handleTime();
    handleSubmit();
  };

  // Effect hook to update sunrise and sunset times whenever they change
  useEffect(() => {
    handleTime();
  }, [sunRise, sunSet]);

  // Effect hook to fetch weather details for the initial empty city
  useEffect(() => {
    weatherDetails("");
  }, []);

  return (
    <div id="container">
      <ThemeContext.Provider value={themeHook}>
        <Header />
        <ToastContainer />
        <HeroSection
          city={city}
          data={data}
          info={info}
          sunRise={sunRise}
          sunSet={sunSet}
          weatherType={weatherType}
          sunriseTime={sunriseTime}
          sunsetTime={sunsetTime}
          handleSubmit={handleSubmit}
          inputCity={inputCity}
          handleKeyDown={handleKeyDown}
          handleCombinedEvents={handleCombinedEvents}
          setInputCity={setInputCity}
        />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
