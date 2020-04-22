import * as React from "react";
import { Currency } from "../Currency/Currency";
import "./SearchBar.css";

export const SearchBar = ({ currency = "usd" }) => (
  <div className="search-bar-container">
    <div className="search-bar">
      <Currency currency={currency} />
    </div>
  </div>
);
