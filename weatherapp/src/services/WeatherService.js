const API_KEY = "ed2a4d7a5baf4f7d86583529220510";
const FETCH_CITY_WEATHER_URL = "http://api.weatherapi.com/v1/current.json";

export const fetchWeatherByCity = async (city) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);
  url.searchParams.append("key", API_KEY);
  url.searchParams.append("q", city);
  url.searchParams.append("aqi", "false");
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
