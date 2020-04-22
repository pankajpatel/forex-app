import * as React from "react";
import "./Currency.css";

export const Currency = ({ currency = "usd" }) => (
  <div>
    <span className={`currency-flag currency-flag-${currency.toLowerCase()}`}></span>
    <span className="currency">{currency.toUpperCase()}</span>
  </div>
);
