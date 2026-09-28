import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the Choose date label", () => {
  render(<BookingForm submitForm={() => {}} />);

  const labelElement = screen.getByText("Choose date");

  expect(labelElement).toBeInTheDocument();
});

test("Date input is required", () => {
  render(<BookingForm submitForm={() => {}} />);

  const dateInput = screen.getByLabelText("Choose date");

  expect(dateInput).toBeRequired();
});

test("Time select is required", () => {
  render(<BookingForm submitForm={() => {}} />);

  const timeSelect = screen.getByLabelText("Choose time");

  expect(timeSelect).toBeRequired();
});

test("Guests input has correct validation attributes", () => {
  render(<BookingForm submitForm={() => {}} />);

  const guestsInput = screen.getByLabelText("Number of guests");

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Occasion select is required", () => {
  render(<BookingForm submitForm={() => {}} />);

  const occasionSelect = screen.getByLabelText("Occasion");

  expect(occasionSelect).toBeRequired();
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
test("Guests input rejects less than 1 guest", () => {
  render(<BookingForm submitForm={() => {}} />);

  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(guestsInput, {
    target: { value: "0" },
  });

  expect(guestsInput).toHaveValue(0);
  expect(guestsInput).toBeInvalid();
});

test("Guests input accepts a valid number of guests", () => {
  render(<BookingForm submitForm={() => {}} />);

  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(guestsInput, {
    target: { value: "4" },
  });

  expect(guestsInput).toHaveValue(4);
  expect(guestsInput).toBeValid();
});
test("Submits the form when valid data is entered", () => {
  const submitForm = jest.fn();

  render(<BookingForm submitForm={submitForm} />);

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");
  const button = screen.getByDisplayValue("Make Your reservation");

  fireEvent.change(dateInput, {
    target: { value: "2026-09-30" },
  });

  fireEvent.change(timeSelect, {
    target: { value: "17:00" },
  });

  fireEvent.change(guestsInput, {
    target: { value: "4" },
  });

  fireEvent.click(button);

  expect(submitForm).toHaveBeenCalledTimes(1);
});