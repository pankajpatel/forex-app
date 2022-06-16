import { useState, useEffect } from "react";
import { getData } from "../../utils/fetch";
import { SearchBar } from "../SearchBar/SearchBar";
import { RateList } from "../RateList/RateList";
import "./App.css";

const getRates = (currency) => getData(`/latest?from=${currency}`)

export const App = () => {
  const [state, setState] = useState({
    amount: 1,
    currency: "USD",
    rates: {},
  });

  const { amount, currency, rates } = state;

  const updateState = (updates = {})  => setState((prev) => ({ ...prev, ...updates }));

  useEffect(() => {
    getRates(currency).then(updateState);
  }, [currency]);

  const updateAmount = (amount) => updateState({ amount: Number(amount) });

  const updateCurrency = (currency) => updateState({ currency });

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
