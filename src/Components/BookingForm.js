import { useState } from "react";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <>
      {/* Booking Form */}
      <div className="form-page">
        <form className="book-form" onSubmit={handleSubmit}>
          {/* Date selection */}
          <label htmlFor="res-date">Choose date:</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={date}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <br />

          {/* Time selection */}
          <label htmlFor="res-time">Choose time:</label>
          <select
            id="res-time"
            name="time"
            value={times}
            onChange={(e) => setTimes(e.target.value)}
            required
          >
            <option value="">Select a Time</option>
            {props.availableTimes.availableTimes.map((availableTimes) => {
              return <option key={availableTimes}>{availableTimes}</option>;
            })}
          </select>
          <br />

          {/* Number of guest */}
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guest"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
          <br />

          {/* Occasion selection */}
          <label htmlFor="occasion">Occasion: </label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            key={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <br />
          <br />

          {/* submit button */}
          <button className="book-btn">Make Your reservation</button>
        </form>
      </div>
    </>
  );
}
