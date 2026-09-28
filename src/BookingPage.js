function BookingPage() {
  return (
    <main>
      <h1>Reserve a Table</h1>

      <form>
        <label>
          Date
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label>
          Guests
          <input type="number" min="1" max="10" />
        </label>

        <label>
          Occasion
          <select>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
        </label>

        <button type="submit">Reserve Now</button>
      </form>
    </main>
  );
}

export default BookingPage;