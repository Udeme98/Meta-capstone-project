export default function Navbar() {
  return (
    <nav class="nav">
      <a href="index.html">
        <img src="../images/lemon-logo.png" alt="nav-logo" class="nav-logo" />
      </a>
      <ul class="nav-list">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservation</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
      </ul>
      <a href="#" class="button">
        Login
      </a>
    </nav>
  );
}
