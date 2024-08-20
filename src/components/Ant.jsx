import { useEffect, useState } from "react";
import { Button, InputNumber, Select, Divider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_oFCDa8FkAtPAH2Gbl7ahZNVj2UXHawabnLl6DoYc";

export const Ant = () => {
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
        setResult(0);
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  useEffect(() => {
    exchange();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Divider orientation="center">
          <InputNumber
            value={amount}
            onChange={(value) => setAmount(value)}
            style={{ marginRight: "10px" }}
          />
          <Select
            defaultValue="USD"
            style={{ width: 60, marginRight: "10px" }}
            value={fromCurrency}
            onChange={(value) => setFromCurrency(value)}
          >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="TRY">₺</Option>
          </Select>
          <ArrowRightOutlined style={{ marginRight: "10px" }} />
          <Select
            defaultValue="USD"
            style={{ width: 60, marginRight: "10px" }}
            value={toCurrency}
            onChange={(value) => setToCurrency(value)}
          >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="TRY">₺</Option>
          </Select>
          <InputNumber
            value={result}
            readOnly
            style={{ marginRight: "10px" }}
          />
          <Button className="button" onClick={exchange}>
            Exchange
          </Button>
        </Divider>
      </div>
    </div>
  );
};
