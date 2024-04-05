import Home from "./Components/Home";
import BookingPage from "./Pages/BookingPage";
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
