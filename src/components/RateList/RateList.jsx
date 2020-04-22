import * as React from "react";
import { Currency } from "../Currency/Currency";
import "./RateList.css";

export const RateList = ({ rates = {}, className = '' }) => (
  <div className={`rate-list-container ${className}`}>
    <div className="rate-list">
      <ul>
        {Object.keys(rates).map((currency) => (
          <li>
            <Currency currency={currency} />
            <span className="rate">{rates[currency]}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
