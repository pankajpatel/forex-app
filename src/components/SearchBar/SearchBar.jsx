import * as React from "react";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import "./SearchBar.css";

export const SearchBar = ({
  currency = "usd",
  amount = 1,
  onChangeAmount = () => {},
  onChangeCurrency = () => {},
}) => (
  <div className="search-bar-container">
    <div className="search-bar">
      <input
        type="text"
        defaultValue={amount}
        onChange={(e) => onChangeAmount(e.target.value)}
        placeholder="Amount"
      />
      <CurrencySelector
        currency={currency}
        onChangeCurrency={onChangeCurrency}
      />
    </div>
  </div>
);
