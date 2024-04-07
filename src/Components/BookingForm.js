import { useState } from "react";

export default function BookingForm() {
  const [availableDate, setAvailableDate] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const times = availableTimes.map((availableTime) => {
    return <option key={availableDate}>{availableTime}</option>;
  });

  // console.log(dates);

  return (
    <>
      <div className="form-page">
        <form className="book-form">
          <label htmlFor="res-date">Choose date:</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={availableDate}
            onChange={(e) => setAvailableDate(e.target.value)}
          />
          <br />
          <label htmlFor="res-time">Choose time:</label>
          <select
            id="res-time"
            name="time"
            value={availableTimes}
            onChange={(e) => setAvailableTimes(e.target.value)}
          >
            {times}
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
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
          />
          <br />
          <label htmlFor="occasion">Occasion: </label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
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
