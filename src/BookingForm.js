import { useState } from "react";

export default function BookingForm() {
  const [selectDate, setSelectDate] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    guest: "",
    occasion: "",
  });

  function handleChange(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selectDate);
  }

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  const datesList = availableTimes.map((time) => {
    return <option value={time}>{time}</option>;
  });

  return (
    <>
      <div className="form-page">
        <form className="book-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date:</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="res-time">Choose time:</label>
          <select
            id="res-time"
            name="time"
            value={selectDate}
            onChange={(e) => setSelectDate(e.target.value)}
          >
            {datesList}
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
            value={formData.guest}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="occasion">Occasion: </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
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
