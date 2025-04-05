import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponce = await response.json();
      let result = {
        city: jsonresponce.name,
        temp: jsonresponce.main.temp,
        minTemp: jsonresponce.main.temp_min,
        maxTemp: jsonresponce.main.temp_max,
        preesure: jsonresponce.main.pressure,
        feelsLike: jsonresponce.main.feels_like,
        humidity: jsonresponce.main.humidity,
        weather: jsonresponce.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
      seterror(false);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className="text-center">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className=""
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p className="text-red-600 text-2xl">No such place exist</p>}
      </form>
    </div>
  );
}
