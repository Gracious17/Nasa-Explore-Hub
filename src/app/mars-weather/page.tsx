"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
type WeatherData = {
  sol: string;
  temp: string;
  pressure: string;
  wind: string;
};
const MarsWeatherPage = () => {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch("/api/mars");
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    };
    getWeather();
  }, []);
  if (loading) return <p>loading mars data...</p>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-center">Mars Weather Report</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {weather.map((day) => (
          <div
            key={day.sol}
            className="bg-gray-800 p-4 rounded shadow space-y-2 border border-gray-700"
          >
            <h2 className="text-lg font-semibold">Sol {day.sol}</h2>
            <p>Temp: {day.temp}°C</p>
            <p>Pressure: {day.pressure}Pa</p>
            <p>Wind: {day.wind}m/s</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MarsWeatherPage;
