import BookingForm from "./BookingForm";

function BookingPage({ submitForm }) {
  return (
    <section>
      <h1>Reserve a Table</h1>
      <BookingForm submitForm={submitForm} />
    </section>
  );
}

export default BookingPage;