import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* Specials Section*/}
      <section className="specials">
        <div className="specials-top">
          <h3>Specials</h3>
          <Link to="/menu" className="specials-button">
            Online Menu
          </Link>
        </div>
        <div className="specials-down">
          <div className="card">
            <img
              src="../images/greek-salad.jpeg"
              alt="sec-img"
              className="card-img"
            />
            <div className="card-text">
              <div className="name-price">
                <h3>Greek Salad</h3>
                <h4>$12.34</h4>
              </div>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="../images/bruchetta.jpg"
              alt="sec-img"
              className="card-img"
            />
            <div className="card-text">
              <div className="name-price">
                <h3>Bruchetta</h3>
                <h4>$5.99</h4>
              </div>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="../images/lemon-magic.jpg"
              alt="sec-img"
              className="card-img"
            />
            <div className="card-text">
              <div className="name-price">
                <h3>Lemon Dessert</h3>
                <h4>$5.00</h4>
              </div>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial">
        <div className="tes-top">
          <h2>Testimonials</h2>
        </div>
        <div className="tes-down">
          <div className="tes-card">
            <img src="../images/-l4j9q.jpg" alt="tes-img" className="tes-img" />
            <div className="tes-text">
              <h3>Udeme</h3>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div className="tes-card">
            <img src="../images/woman.jpeg" alt="tes-img" className="tes-img" />
            <div className="tes-text">
              <h3>Jane</h3>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div className="tes-card">
            <img src="../images/man.jpeg" alt="tes-img" className="tes-img" />
            <div className="tes-text">
              <h3>John</h3>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About section  */}
      <section className="about">
        <div className="ab-title">
          <h2>About</h2>
        </div>
        <div className="about-info">
          <div className="ab-left">
            <h1 className="ab-heading">Little Lemon</h1>
            <p className="ab-text">
              lorem ipsum dolor sit amet dolor, consectoe aditey sede elusitiona
              tempor incidenta et laborate magna a liquor lorem ipsum dolor sit
              amet dolor, consectoe aditey sede elusitiona tempor incidenta et
              laborate magna a liquor
            </p>
          </div>
          <div className="ab-right">
            <img
              src="../images/food2.jpg"
              alt="ab-img"
              className="ab-img img-1"
            />
            <img
              src="../images/chef3.jpg"
              alt="ab-img"
              className="ab-img img-2"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
