import React from "react";
import "./App.css";
import { countries } from "./data";

function App() {
  const [country, setCountry] = React.useState("");
  const [number, setNumber] = React.useState("");
  const phone = country + number;
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  const invalid = !regex.test(phone);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`You entered ${phone}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Phone number</legend>
        <label htmlFor="country-code">Country</label>
        <input
          placeholder="+44"
          type="text"
          list="countrycodes"
          id="country-code"
          value={country}
          onChange={e => setCountry(e.target.value)}
          aria-invalid={invalid}
        />
        <datalist id="countrycodes">
          {countries.map(country => {
            return (
              <option key={country.code} value={`+${country.phone}`}>
                {country.label} (+{country.phone})
              </option>
            );
          })}
        </datalist>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="phone"
          placeholder="12345678"
          value={number}
          onChange={e => setNumber(e.target.value)}
          aria-invalid={invalid}
        />
        <div className={`message ${invalid ? "message--invalid" : ""}`}>
          {invalid ? "Invalid phone number" : ""}
        </div>
        <input type="submit" value="Submit" disabled={invalid} />
      </fieldset>
    </form>
  );
}

export default App;
