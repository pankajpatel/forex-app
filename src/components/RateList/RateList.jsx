import * as React from "react";
import { Currency } from "../Currency/Currency";
import "./RateList.css";

const Amount = ({ amount, rate }) => {
  const _rate = Number(rate);
  return (
    <span className="rate">{(amount ? _rate * amount : _rate).toFixed(5)}</span>
  );
};

export const RateList = ({ rates = {}, amount, className = "" }) => (
  <div className={`rate-list-container ${className}`}>
    <div className="rate-list">
      <ul>
        {Object.keys(rates).map((currency) => (
          <li key={currency}>
            <Currency currency={currency} />
            <Amount rate={rates[currency]} amount={amount} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
