import BookingForm from "./BookingForm";
import { useState } from "react";
import Main from "./Main";

export default function BookingPage(props) {
  return (
    <>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </>
  );
}
