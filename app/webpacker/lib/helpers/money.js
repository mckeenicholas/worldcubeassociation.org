import { currenciesData } from '../wca-data.js.erb';

// eslint-disable-next-line import/prefer-default-export
export function isoMoneyToHumanReadable(amount, isoCode, name = false) {
  const currency = currenciesData.byIso[isoCode];
  const decimalPlaces = Math.ceil(Math.log10(currency.subunitToUnit));
  const value = (amount / currency.subunitToUnit).toFixed(decimalPlaces);
  const formattedAmount = currency.symbolFirst
    ? `${currency.symbol}${value}`
    : `${value} ${currency.symbol}`;

  return `${formattedAmount} (${name ? currency.name : isoCode})`;
}
