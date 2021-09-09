import { useEffect, useState } from "react";
import { LoadingScreen } from "./Loading";
import { CardGrid } from "./CardGrid";
import { Header } from "./Header";
import { DatePickers } from "./DatePickers";

function App() {
  // used for API requests
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=sPjwtonfszbaCuXD47EWYC8XGBUmn1oj2s6Y6y6d&start_date=${startDate
        .toISOString()
        .slice(0, 10)}&end_date=${endDate.toISOString().slice(0, 10)}`
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [startDate, endDate]);

  return (
    <>
      <Header />

      <DatePickers
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={handleStartDateChange}
        on
        onEndDateChange={handleEndDateChange}
      />

      {loading ? (
        <LoadingScreen />
      ) : error ? (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      ) : data ? (
        <CardGrid data={data} />
      ) : (
        <p>ERROR: NO DATA RETURED FROM API</p>
      )}
    </>
  );
}

export default App;
