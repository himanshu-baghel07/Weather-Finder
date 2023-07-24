# Weather Finder (React.js)

![Weather App Screenshot](https://i.postimg.cc/Wb5qf8BV/Screenshot-2023-07-25-002521.png)

This is a simple Weather App built using React.js that allows users to search for weather information based on the city name. It fetches data from the OpenWeather API to display the current weather conditions, temperature, humidity, wind speed, and sunrise/sunset times.

## Features

- Search weather information by city name
- Display current weather conditions and temperature
- Show additional details like humidity, wind speed, and sunrise/sunset times
- Dynamic background image based on weather conditions

## Demo

You can see a live demo of the app [here](https://weather-app-ba5df.web.app/).

## Getting Started

To run the Weather App locally on your machine, follow these steps:

1. Clone this repository to your local machine using:

```bash
git clone https://github.com/himanshu-baghel07/Weather-Finder
```

2. Navigate to the project directory:

```bash
cd Weather-Finder
```

3. Install the required dependencies:

```bash
npm install
```

4. Obtain an API key from [OpenWeather](https://openweathermap.org/api) and set it as an environment variable. Create a `.env` file in the root directory and add your API key:

```plaintext
REACT_APP_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
npm run dev
```

The app should now be running on `http://localhost:5173`.

## Dependencies

The Weather App is built using the following main dependencies:

- React: JavaScript library for building user interfaces.
- axios: HTTP client for making API requests.
- react-icons: Icon library for using SVG icons in the app.
- react-toastify: Displaying toast notifications for user feedback.

## Folder Structure

The project structure is organized as follows:

```plaintext
weather-app/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── Header.js
  │   │   ├── HeroSection.js
  │   │   └── ...
  │   ├── context/
  │   │   └── ThemeContext.js
  │   ├── images/
  │   │   ├── sunnySky.jpg
  │   │   ├── cloudySky.jpg
  │   │   └── ...
  │   ├── App.css
  │   ├── App.js
  │   └── index.js
  ├── .env.example
  ├── .gitignore
  ├── package.json
  ├── README.md
  └── ...
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or create a pull request.

## License


Enjoy using the Weather App! If you have any questions or need further assistance, please don't hesitate to reach out.

Author: Himanshu Baghel

## Thank You 
