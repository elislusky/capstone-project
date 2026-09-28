import Nav from "./Nav";
import logo from "./assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  );
}

export default Header;