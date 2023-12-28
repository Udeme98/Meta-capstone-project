import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders learn react link", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});
