import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_oFCDa8FkAtPAH2Gbl7ahZNVj2UXHawabnLl6DoYc";

export const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    try {
      if (amount > 0) {
        const response = await axios.get(
          `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
        );
        const rate = response.data.data[toCurrency];
        const convertedAmount = amount * rate;
        setResult(convertedAmount.toFixed(2));
      } else {
        setResult(null);
      }
    } catch (error) {
      console.error("Döviz kurunu alırken hata oluştu:", error);
    }
  };
  useEffect(() => {
    exchange();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="currency-div">
      <input
        type={"number"}
        className="amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <select
        className="from-currency-option"
        value={fromCurrency}
        onChange={(e) => {
          setFromCurrency(e.target.value);
        }}
      >
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
      </select>

      <FaArrowRight />

      <select
        className="to-currency-option"
        value={toCurrency}
        onChange={(e) => {
          setToCurrency(e.target.value);
        }}
      >
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>

      <input
        type={"number"}
        className="result"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />

      <button onClick={exchange}>Exchange</button>
    </div>
  );
};
