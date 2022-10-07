import "./SearchCity.css";
import { useState } from "react";
import { fetchWeatherByCity } from "../../../services/WeatherService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchCity = (props) => {
  const [city, setCity] = useState("");
  const onCityInputChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };
  const onSearchButtonClick = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    try {
      const weatherData = await fetchWeatherByCity(city);
      props.search(weatherData);
    } catch (error) {
      console.error("Failed to fetch city weather due to error", error);
    } finally {
      props.setLoading(false);
    }
  };
  return (
    <>
      <Form onSubmit={onSearchButtonClick}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search City.."
            value={city}
            onChange={onCityInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Show air quality data"
            className="air-quality"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};
export default SearchCity;
