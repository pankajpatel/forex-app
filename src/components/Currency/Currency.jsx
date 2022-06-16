import { CurrencyFlag } from "../CurrencyFlag";
import "./Currency.css";

const CSymbol = ({ currency }) => (
  <span className="currency">{currency.toUpperCase()}</span>
);

const display = (currency) => [
  <CurrencyFlag key={`flag-${currency}`} currency={currency} />,
  <CSymbol key={`symbol-${currency}`} currency={currency} />,
];

export const Currency = ({ currency = "usd" }) => (
  <div className="currency-box">{display(currency)}</div>
);
