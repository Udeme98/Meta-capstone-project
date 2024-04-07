import { useState, useReducer } from "react";
import BookingForm from "../Components/BookingForm";
import Navbar from "../Components/Navbar";

const timeArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const initialState = timeArray;

const reducer = () => {};

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <>
      <Navbar />
      <BookingForm
        availableTimes={availableTimes}
        timeArray={timeArray}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
}
