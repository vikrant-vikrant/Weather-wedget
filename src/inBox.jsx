import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import LocationPinIcon from "@mui/icons-material/LocationPin";
export default function InfoBox({ info }) {
  const HOT_URL =
    "https://plus.unsplash.com/premium_vector-1715641644587-ecda81c2a6e2?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_vector-1728928366990-1f88397f2477?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_vector-1722028326151-13af9b571f70?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox mt-5 flex justify-center">
      <Card className="w-xl">
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <div className="text-xl text-gray-400 underline">
            <LocationPinIcon />
            {info.city}
          </div>
          <span className="text-3xl text-gray-400">
            {info.weather}&nbsp;&nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </span>
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            <div className="mt-2">
              <p className="text-7xl font-bold">{info.temp}&deg;C &nbsp;</p>
            </div>
            <div className="inline text-xl">
              <span>High : {info.maxTemp}&deg;C</span>&nbsp;
              <b className="text-xl">/</b>&nbsp;
              <span>Low : {info.minTemp}&deg;C</span>
            </div>
            <div className="mt-2 text-xl text-gray-400">
              <span>Humidity = {info.humidity}</span>&nbsp;&nbsp;
              <span>Feels like = {info.feelsLike}&deg;C</span>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
