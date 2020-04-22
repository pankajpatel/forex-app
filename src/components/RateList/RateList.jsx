import * as React from "react";
import { Currency } from "../Currency/Currency";
import "./RateList.css";

export const RateList = ({ rates = [] }) => (
  <div className="rate-list-container">
    <div className="rate-list">
      <ul>
        {rates.map((rate) => (
          <Currency />
        ))}
      </ul>
    </div>
  </div>
);
