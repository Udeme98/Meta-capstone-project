import { useState, useReducer } from "react";
import BookingForm from "../Components/BookingForm";
import Navbar from "../Components/Navbar";

const timeArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const initializeTimes = { time: timeArray };
const updateTimes = (state, action) => {
  return state;
};

export default function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Navbar />
      <BookingForm
        availableTimes={availableTimes}
        // timeArray={timeArray}
        // setAvailableTimes={setAvailableTimes}
      />
    </>
  );
}
