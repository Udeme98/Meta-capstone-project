import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
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
    console.log(formData);
  }
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
            value={formData.time}
            onChange={handleChange}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
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
