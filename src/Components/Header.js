import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">Little Lemon</h1>
        <h3 className="hero-sub">Chicago</h3>
        <p className="hero-text">
          lorem ipsum dolor sit amet dolor, consectoe aditey sede elusitiona
          tempor incidenta et laborate magna a liquor
        </p>
        <Link to="/booking" className="hero-button">
          Reserve A Table
        </Link>
      </div>
      <div className="hero-right">
        <img src="../images/chef.png" alt="hero-img" className="hero-img" />
      </div>
    </section>
  );
};
export default Header;
