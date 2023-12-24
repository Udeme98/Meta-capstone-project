import Navbar from "./Navbar";

export default function BookingForm() {
  return (
    <>
      <Navbar />
      <div className="form-page">
        <form className="book-form">
          <label htmlFor="res-date">Choose date:</label>
          <input type="date" id="res-date" />
          <br />
          <label htmlFor="res-time">Choose time:</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <br />
          <label htmlFor="guests">Number of guests:</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
          <br />
          <label htmlFor="occasion">Occasion: </label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <br />
          <br />
          <button className="book-btn">Make Your reservation</button>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}
