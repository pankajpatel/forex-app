import * as React from "react";
import "./CurrencySelector.css";
import { CurrencyFlag } from "../CurrencyFlag";

const currencies = ["EUR", "USD", "GBP"];

export const CurrencySelector = ({ currency = "usd", onChangeCurrency }) => (
  <div className="currency-box">
    <select
      className="currency-select"
      value={currency}
      onChange={(e) => onChangeCurrency(e.target.value)}
    >
      {currencies.map((item, index) => (
        <option key={index} >{item}</option>
      ))}
    </select>
    <CurrencyFlag key={`flag-${currency}`} currency={currency} />
  </div>
);
