import BookingForm from "./BookingForm";
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
