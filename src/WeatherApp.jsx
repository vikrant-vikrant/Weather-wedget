import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./inBox";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 32,
    minTemp: 32,
    maxTemp: 32,
    preesure: 1006,
    feelsLike: 30,
    humidity: 90,
    weather: "Broken clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="flex-col justify-center">
      <h1 className="text-center text-4xl font-[cursive] m-5 font-bold text-sky-500">
        Weather App by Delta
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
