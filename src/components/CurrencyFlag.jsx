import * as React from "react";

export const CurrencyFlag = ({ currency }) => (
  <span
    className={`currency-flag currency-flag-${currency.toLowerCase()}`}
  ></span>
);
