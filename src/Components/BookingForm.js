import { useState } from "react";

export default function BookingForm() {
  return (
    <>
      <div className="form-page">
        <form className="book-form">
          <label htmlFor="res-date">Choose date:</label>
          <input type="date" id="res-date" name="date" />
          <br />
          <label htmlFor="res-time">Choose time:</label>
          <select id="res-time" name="time"></select>
          <br />
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guest"
          />
          <br />
          <label htmlFor="occasion">Occasion: </label>
          <select id="occasion" name="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <br />
          <br />
          <button className="book-btn">Make Your reservation</button>
        </form>
      </div>
    </>
  );
}
