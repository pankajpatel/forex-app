import React, { useState, useEffect } from "react";
import "./App.css";
import { getData } from "../../utils/fetch";
import { SearchBar } from "../SearchBar/SearchBar";
import { RateList } from "../RateList/RateList";

function App() {
  const [state, setState] = useState({
    amount: 1,
    currency: "USD",
    rates: {},
  });

  const { amount, currency, rates } = state;

  const getRates = (currency) =>
    getData(`/latest?from=${currency}`).then(({ rates }) =>
      setState((currentState) => ({
        ...currentState,
        rates,
      }))
    );

  useEffect(() => {
    getRates(currency);
  }, [currency]);

  const updateAmount = (amount) =>
    setState((currentState) => ({
      ...currentState,
      amount: Number(amount),
    }));

  const updateCurrency = (currency) =>
    setState((currentState) => ({
      ...currentState,
      currency,
    }));

  return (
    <div className="app" data-testid="app-container">
      <main className="contents">
        <SearchBar
          amount={amount}
          currency={currency}
          onChangeAmount={updateAmount}
          onChangeCurrency={updateCurrency}
        />
        <RateList className="rates" rates={rates} amount={amount} />
      </main>
    </div>
  );
}

export default App;
