import { useState } from "react";

export default function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const dates = availableTimes.map((availableTime) => {
    return <option>{availableTime}</option>;
  });

  // console.log(dates);

  function handleChange() {}
  return (
    <>
      <div className="form-page">
        <form className="book-form">
          <label htmlFor="res-date">Choose date:</label>
          <input type="date" id="res-date" name="date" />
          <br />
          <label htmlFor="res-time">Choose time:</label>
          <select id="res-time" name="time">
            {dates}
          </select>
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
