import { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";

export default function BookingPage() {
  // const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];
  // const [availableTimes, dispatchTimes] = useReducer(
  //   updateTimes,
  //   [],
  //   initializeTimes
  // );

  // function updateTimes(state, action) {
  //   return initializeTimes();
  // }

  const initializeTimes = async () => {
    const today = new Date();
    // eslint-disable-next-line no-undef
    const availableTimes = await fetchAPI(today);
    return availableTimes;
  };

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  async function updateTimes(state, action) {
    if (action.type === "UPDATE_TIMES") {
      // eslint-disable-next-line no-undef
      const availableTimes = await fetchAPI(action.date);
      return availableTimes;
    }
    return state;
  }

  useEffect(() => {
    initializeTimes().then((times) =>
      dispatchTimes({ type: "UPDATE_TIME", date: new Date() })
    );
  }, []);

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
