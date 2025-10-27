import { useState } from "react";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f09d17290ec27303d7af5b6d2b1d87f&units=metric`
      );
      const json = await res.json();
      if (json.cod !== 200) {
        setError("City not found");
        setData(null);
      } else {
        setData(json);
      }
    } catch (err) {
      setError("Error fetching weather");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Weather Widget</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />
      <button
        onClick={fetchWeather}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}
      {data && (
        <div className="mt-3 text-center">
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p>{data.main.temp}°C</p>
          <p>{data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={data.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
