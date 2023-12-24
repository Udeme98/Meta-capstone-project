import Home from "./Home";
import BookingPage from "./BookingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
