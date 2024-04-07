import { useState } from "react";
import BookingForm from "../Components/BookingForm";
import Navbar from "../Components/Navbar";

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState("");
  const timeArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

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
