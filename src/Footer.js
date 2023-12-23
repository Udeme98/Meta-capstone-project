import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <img src="../images/foot-logo.png" alt="foot-logo" class="foot-img" />

      <ul class="links">
        <h4 class="foot-sub">Links</h4>
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
      <ul class="contacts">
        <h4 class="foot-sub">Contacts</h4>
        <li>12 Blossom Avenue</li>
        <li>+20947352</li>
        <li>Dalemon@lemon.com</li>
      </ul>
      <ul class="socials">
        <h4 class="foot-sub">Socials</h4>
        <div class="f-t">
          <li>
            <img src="../images/icon-facebook.svg" alt="facebook-icon" />
          </li>
          <li>
            <img src="../images/icon-twitter.svg" alt="twitter-icon" />
          </li>
        </div>
      </ul>
      <h5 class="foot-text">Copyright &copy; 2023, All Rights Reserved.</h5>
    </footer>
  );
}
