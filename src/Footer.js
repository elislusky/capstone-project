import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Little Lemon</p>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <p>123 Main Street, Chicago</p>
      <p>info@littlelemon.com</p>
    </footer>
  );
}

export default Footer;