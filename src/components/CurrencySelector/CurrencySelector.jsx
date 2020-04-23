import * as React from "react";
import "./CurrencySelector.css";
import { CurrencyFlag } from "../CurrencyFlag";

const currencies = ["EUR", "USD", "GBP"];

export const CurrencySelector = ({ currency = "usd", onChangeCurrency }) => (
  <div className="currency-box">
    <select
      className="currency-select"
      onChange={(e) => onChangeCurrency(e.target.value)}
    >
      {currencies.map((item) => (
        <option selected={currency === item}>{item}</option>
      ))}
    </select>
    <CurrencyFlag key={`flag-${currency}`} currency={currency} />
  </div>
);
