import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
} from "lucide-react";

const weatherData = {
  city: "Toronto",
  time: "09:05",
  date: "Thursday, 31 Aug",
  temperature: "24°C",
  feelsLike: "22°C",
  humidity: "41%",
  windSpeed: "2km/h",
  sunrise: "06:37 AM",
  sunset: "20:37 AM",
  condition: "Sunny",
  pressure: "997hPa",
  uvIndex: "8",
  forecast: [
    { day: "Friday, 1 Sep", temperature: "20°C", condition: "cloudy" },
    { day: "Saturday, 2 Sep", temperature: "22°C", condition: "rainy" },
    { day: "Sunday, 3 Sep", temperature: "27°C", condition: "sunny" },
    { day: "Monday, 4 Sep", temperature: "18°C", condition: "stormy" },
    { day: "Tuesday, 5 Sep", temperature: "16°C", condition: "snowy" },
  ],
  hourlyForecast: [
    { time: "12:00", temperature: "26°C", wind: "3km/h", condition: "sunny" },
    { time: "15:00", temperature: "27°C", wind: "2km/h", condition: "cloudy" },
    { time: "18:00", temperature: "27°C", wind: "2km/h", condition: "rainy" },
    { time: "21:00", temperature: "25°C", wind: "3km/h", condition: "stormy" },
    { time: "00:00", temperature: "22°C", wind: "3km/h", condition: "drizzle" },
  ],
};

const WeatherIcon = ({ condition, size = 24, className = "" }) => {
  const iconProps = {
    size,
    className: `${className} transition-all duration-300 ease-in-out`,
  };

  switch (condition) {
    case "sunny":
      return (
        <Sun
          {...iconProps}
          className={`${iconProps.className} text-yellow-400`}
        />
      );
    case "cloudy":
      return (
        <Cloud
          {...iconProps}
          className={`${iconProps.className} text-gray-400`}
        />
      );
    case "rainy":
      return (
        <CloudRain
          {...iconProps}
          className={`${iconProps.className} text-blue-400`}
        />
      );
    case "stormy":
      return (
        <CloudLightning
          {...iconProps}
          className={`${iconProps.className} text-purple-400`}
        />
      );
    case "snowy":
      return (
        <CloudSnow
          {...iconProps}
          className={`${iconProps.className} text-blue-200`}
        />
      );
    case "drizzle":
      return (
        <CloudDrizzle
          {...iconProps}
          className={`${iconProps.className} text-blue-300`}
        />
      );
    default:
      return (
        <Sun
          {...iconProps}
          className={`${iconProps.className} text-yellow-400`}
        />
      );
  }
};

const WeatherCard = () => {
  return (
    <div
      className="min-h-screen w-full p-4 md:p-6"
      style={{
        backgroundImage:
          "radial-gradient( circle 341px at 10% 20%, rgba(173,0,171,1) 0%, rgba(15,51,92,1) 90% )",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto"
      >
        {/* Search Bar */}
        <div className="relative w-full max-w-xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search for your preferred city..."
            className="w-full px-4 py-3 text-base md:text-lg bg-white/20 backdrop-blur-md border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 shadow-lg transition-all duration-300 hover:bg-white/30"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* City and Time Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {weatherData.city}
              </h2>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                {weatherData.time}
              </div>
              <div className="text-lg md:text-xl text-white/80">
                {weatherData.date}
              </div>
            </motion.div>

            {/* 5 Days Forecast */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                5 Days Forecast
              </h3>
              <div className="space-y-4">
                {weatherData.forecast.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center justify-between text-white bg-white/10 rounded-lg p-3 transition-all duration-300 hover:bg-black/20 cursor-pointer hover:shadow-lg"
                  >
                    <span className="text-base md:text-lg flex items-center gap-2">
                      <WeatherIcon condition={item.condition} size={24} />
                      {item.day}
                    </span>
                    <span className="text-lg md:text-xl font-bold">
                      {item.temperature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Current Weather */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                    {weatherData.temperature}
                  </div>
                  <div className="text-lg md:text-xl text-white/80 mb-6">
                    Feels like: {weatherData.feelsLike}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div>
                      <div className="text-base opacity-80">Sunrise</div>
                      <div className="text-lg font-semibold">
                        {weatherData.sunrise}
                      </div>
                    </div>
                    <div>
                      <div className="text-base opacity-80">Sunset</div>
                      <div className="text-lg font-semibold">
                        {weatherData.sunset}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <WeatherIcon condition="sunny" size={72} className="mb-3" />
                  <div className="text-xl md:text-2xl text-white">
                    {weatherData.condition}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-white">
                  <div className="text-base opacity-80">Humidity</div>
                  <div className="text-lg font-bold">
                    {weatherData.humidity}
                  </div>
                </div>
                <div className="text-white">
                  <div className="text-base opacity-80">Wind Speed</div>
                  <div className="text-lg font-bold">
                    {weatherData.windSpeed}
                  </div>
                </div>
                <div className="text-white">
                  <div className="text-base opacity-80">Pressure</div>
                  <div className="text-lg font-bold">
                    {weatherData.pressure}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hourly Forecast */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Hourly Forecast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {weatherData.hourlyForecast.map((hour, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 rounded-xl p-3 text-white text-center transition-all duration-300 hover:bg-black/20 cursor-pointer hover:shadow-lg"
                  >
                    <div className="text-base mb-2">{hour.time}</div>
                    <WeatherIcon
                      condition={hour.condition}
                      size={28}
                      className="mx-auto mb-2"
                    />
                    <div className="text-lg font-bold mb-1">
                      {hour.temperature}
                    </div>
                    <div className="text-sm opacity-80">{hour.wind}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeatherCard;
