import { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <BookingForm />
    </>
  );
}
