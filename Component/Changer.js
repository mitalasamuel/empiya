import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { MenuItem, Select, TextField, Button } from "@mui/material";
import countries from '../public/countries.json';

const CombinedApp = () => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        // fetch country data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry, something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = countryState;
  const [selectedCountry, setSelectedCountry] = useState();

  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [result, setResult] = useState('');
  const [currencyData, setCurrencyData] = useState([]);
  const [flags, setFlags] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/5f2922ce2f60c7b99ee5cc5c/latest/USD'
        );
        const data = await response.json();
        setCurrencyData(data.conversion_rates);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, []);

  useEffect(() => {
    const fetchFlags = () => {
      const flags = {};
      Object.keys(countries).forEach((countryCode) => {
        const flag = countries[countryCode].flag;
        flags[countryCode] = flag;
      });
      setFlags(flags);
    };

    fetchFlags();
  }, []);

  const convertCurrency = () => {
    if (currencyData[baseCurrency] && currencyData[targetCurrency]) {
      const baseRate = currencyData[baseCurrency];
      const targetRate = currencyData[targetCurrency];
      const convertedAmount = (amount / baseRate) * targetRate;
      setResult(`Converted amount: ${convertedAmount} ${targetCurrency}`);
    } else {
      setResult('Invalid currency selection');
    }
  };

  return (
    <div>
      {/* FlagApp */}
      <section>
        <div
          style={{
            backgroundColor: "#777",
            width: "auto",
            height: "96vh",
            paddingBottom: "20px",
            margin: "5px",
            marginTop: "40px",
            width: "100%",
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          {/* header section */}
          <div
            style={{
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "3xl",
                textAlign: "center",
              }}
            >
              </p>
          </div>

          {/* body section */}
          <div>
            {loading === true ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "48px",
                }}
              >
                <p
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "3xl",
                  }}
                >
                  ...loading
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  marginTop: "14px",
                  marginLeft: "10px",
                  gap: "10px",
                }}
              >
                <div>
                  <Select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    style={{
                      width: "96px",
                      height: "14px",
                      fontSize: "xl",
                      borderRadius: "lg",
                      fontSize: "2xl",
                    }}
                  >
                    <MenuItem>--Select Country--</MenuItem>
                    {countries.map((item) => {
                      return (
                        <MenuItem
                          key={uuidv4()}
                          value={item.name.common}
                          style={{
                            fontSize: "2xl",
                          }}
                        >
                          {item.name.common}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                <div>
                  {searchSelectedCountry && (
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          borderBottom: "2px solid #888",
                          paddingBottom: "2px",
                        }}
                      >
                        <img
                          style={{
                            width: "16px",
                            height: "8px",
                          }}
                          src={
                            searchSelectedCountry.flags &&
                            searchSelectedCountry.flags.png
                          }
                          alt=""
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            height: "14px",
                            fontSize: "xl",
                            display: "flex",
                            alignItems: "flex-end",
                            borderBottom: "2px solid #888",
                            paddingBottom: "3px",
                            fontSize: "2xl",
                          }}
                        >
                          {searchSelectedCountry.idd &&
                            searchSelectedCountry.idd.root}
                          {searchSelectedCountry.idd &&
                            searchSelectedCountry.idd.suffixes}
                        </p>
                      </div>
                      <div>
                        <TextField
                          type="tel"
                          placeholder="Phone"
                          style={{
                            width: "100%",
                            height: "14px",
                            fontSize: "xl",
                            borderBottom: "2px solid #888",
                            borderTop: "0",
                            borderLeft: "0",
                            borderRight: "0",
                            focus: "ring-white",
                            outline: "none",
                            fontSize: "2xl",
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Converter */}
      <div>
        <TextField
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <Select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          {Object.keys(currencyData).map((currency) => (
            <MenuItem key={currency} value={currency}>
              <img
                height={20}
                width={30}
                src={flags[currency]}
                alt={currency}
              />
              {currency}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          {Object.keys(currencyData).map((currency) => (
            <MenuItem key={currency} value={currency}>
              <img
                height={20}
                width={30}
                src={flags[currency]?.flag}
                alt={currency}
              />
              {currency}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={convertCurrency}>Exchange</Button>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default CombinedApp;
