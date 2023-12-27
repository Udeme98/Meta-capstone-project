import { useReducer } from "react";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";

export default function BookingPage() {
  const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function updateTimes(state, action) {
    return initializeTimes();
  }
  return (
    <>
      <Navbar />
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
      />
    </>
  );
}
