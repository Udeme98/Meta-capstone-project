import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <img src="../images/foot-logo.png" alt="foot-logo" className="foot-img" />

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
          <Link to="/booking">Reservation</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
      </ul>
      <ul className="contacts">
        <h4 className="foot-sub">Contacts</h4>
        <li>12 Blossom Avenue</li>
        <li>+20947352</li>
        <li>Dalemon@lemon.com</li>
      </ul>
      <ul className="socials">
        <h4 className="foot-sub">Socials</h4>
        <div className="f-t">
          <li>
            <img src="../images/icon-facebook.svg" alt="facebook-icon" />
          </li>
          <li>
            <img src="../images/icon-twitter.svg" alt="twitter-icon" />
          </li>
        </div>
      </ul>
      <h5 className="foot-text">Copyright &copy; 2023, All Rights Reserved.</h5>
    </footer>
  );
}
