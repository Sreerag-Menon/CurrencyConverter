import React from "react";
import { useId } from "react";

function InputBox({
  label,
  className = "",
  amount = 0,
  onSetAmount,
  currencyOptions = [],
  amountDisabled = false,
  selectedCurrency = "usd",
  onCurrencyChange,
  currencyDisabled = false,
}) {
  const amountId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1-2">
          <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
        </div>
        <input
          id={amountId}
          placeholder="amount"
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onSetAmount && onSetAmount(Number(e.target.value))}
        />
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
