import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Address.css";
import { useStateValue } from "./StateProvider";

function Address() {
  const [fullName, setFullName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [pinCode, setPinCode] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [{}, dispatch] = useStateValue();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_ADDRESS",
      address: {
        fullName: fullName,
        phoneNumber: phoneNumber,
        pinCode: pinCode,
        street: street,
        city: city,
        state: state,
      },
    });
  };
  const handleSave = () => {
    var afterFilled = document.getElementById("saved");
    afterFilled.innerHTML = "Saved!!";
  };

  return (
    <div className="address">
      <Link to="/">
        <img
          className="address__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <form className="address__form" onSubmit={handleSubmit}>
        <h2>Add a new address</h2>
        <h5>Country/Region</h5>
        <select>
          <option>India</option>
          <option>U.K</option>
          <option>Germany</option>
          <option>U.S</option>
          <option>Norway</option>
        </select>
        <h5>Full name (First and Last name)</h5>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <h5>Street address</h5>
        <input
          type="text"
          value={street}
          placeholder="Street address, apartment, suite, c/o "
          onChange={(e) => setStreet(e.target.value)}
          required
        />
        <h5>City</h5>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <h5>State / Province / Region</h5>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <h5>Phone number</h5>
        <input
          type="text"
          value={phoneNumber}
          placeholder="10-digit mobile number without prefixes"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <h5>PIN code</h5>
        <input
          type="text"
          value={pinCode}
          placeholder="6 digits [0-9] PIN code"
          onChange={(e) => setPinCode(e.target.value)}
          required
        />
        <button id="saved" onClick={handleSave} type="submit">
          Save
        </button>
      </form>
      <button
        onClick={(e) => {
          navigate("/payment");
        }}
        className="address__redirectPaymentPage"
      >
        Proceed to payment
      </button>
    </div>
  );
}

export default Address;
