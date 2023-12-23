import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="nav">
      <Link to="/">
        <img src="../images/lemon-logo.png" alt="nav-logo" class="nav-logo" />
      </Link>
      <ul class="nav-list">
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
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
      </ul>
      <Link to="/login" class="button">
        Login
      </Link>
    </nav>
  );
}
