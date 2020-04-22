import React, { useState, useEffect } from "react";
import "./App.css";
import { getData } from "../../utils/fetch";
import { SearchBar } from "../SearchBar/SearchBar";
import { RateList } from "../RateList/RateList";

function App() {
  const [rates, setRates] = useState([]);
  useEffect(() => {
    getData("/latest?from=USD").then((data) => {
      setRates(data.rates);
    });
  }, []);

  return (
    <div className="App">
      <main className="contents">
        <SearchBar />
        <RateList className="rates" rates={rates} />
      </main>
    </div>
  );
}

export default App;
