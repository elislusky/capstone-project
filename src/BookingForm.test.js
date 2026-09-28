import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the Choose date label", () => {
  render(<BookingForm submitForm={() => {}} />);

  const labelElement = screen.getByText("Choose date");

  expect(labelElement).toBeInTheDocument();
});

test("Submit button is disabled when form is invalid", () => {
  render(<BookingForm submitForm={() => {}} />);

  const button = screen.getByDisplayValue("Make Your reservation");

  expect(button).toBeDisabled();
});

test("Submit button becomes enabled when form is valid", () => {
  render(<BookingForm submitForm={() => {}} />);

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const button = screen.getByDisplayValue("Make Your reservation");

  fireEvent.change(dateInput, {
    target: { value: "2026-09-30" },
  });

  fireEvent.change(timeSelect, {
    target: { value: "17:00" },
  });

  expect(button).not.toBeDisabled();
});