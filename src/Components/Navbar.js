import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img
          src="../images/lemon-logo.png"
          alt="nav-logo"
          className="nav-logo"
        />
      </Link>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservation</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
      </ul>
      <Link to="/login" className="button">
        Login
      </Link>
    </nav>
  );
}
