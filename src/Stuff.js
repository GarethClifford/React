import React, { Component } from 'react';
import './App.css';

class Stuff extends Component {
  render() {
    return (
      <div className="Stuff">
        <p>Name</p>
        <input id="personName"
        type ="text"
        placeholder="Enter name"
        alt="Enter name"
        onchange="isNameValid()"></input>

        <p>Account number</p>
        <input id="accountNumber"
        type ="number"
        placeholder="Account number"
        alt="Enter account number"
        onchange="isOccupationValid()"></input>

        <p>Expiry date</p>
        <input id="expiryDate"
        type ="text"
        placeholder="MM/YYYY"
        alt="Enter expiry date"></input>

        <p>Secuity code</p>
        <input id="securityCode"
        type ="number"
        placeholder="Enter security code"
        alt="Enter security code"></input>

        <br />
        <button type="button" name="button" onclick="alert('Thank you')"> Sumbit details </button>

      </div>
    );
  }
}

export default Stuff;
