export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section class="hero">
        <div class="hero-left">
          <h1 class="hero-heading">Little Lemon</h1>
          <h3 class="hero-sub">Chicago</h3>
          <p class="hero-text">
            lorem ipsum dolor sit amet dolor, consectoe aditey sede elusitiona
            tempor incidenta et laborate magna a liquor
          </p>
          <a href="#" class="hero-button">
            Reserve A Table
          </a>
        </div>
        <div class="hero-right">
          <img src="../images/chef.png" alt="hero-image" class="hero-img" />
        </div>
      </section>

      {/* Specials Section*/}
      <section class="specials">
        <div class="specials-top">
          <h3>Specials</h3>
          <a href="#" class="specials-button">
            Online Menu
          </a>
        </div>
        <div class="specials-down">
          <div class="card">
            <img
              src="../images/greek-salad.jpeg"
              alt="sec-img"
              class="card-img"
            />
            <div class="card-text">
              <div class="name-price">
                <h3>Greek Salad</h3>
                <h4>$12.34</h4>
              </div>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div class="card">
            <img src="../images/bruchetta.jpg" alt="sec-img" class="card-img" />
            <div class="card-text">
              <div class="name-price">
                <h3>Bruchetta</h3>
                <h4>$5.99</h4>
              </div>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="../images/lemon-magic.jpg"
              alt="sec-img"
              class="card-img"
            />
            <div class="card-text">
              <div class="name-price">
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
      <section class="testimonial">
        <div class="tes-top">
          <h2>Testimonials</h2>
        </div>
        <div class="tes-down">
          <div class="tes-card">
            <img src="../images/-l4j9q.jpg" alt="tes-img" class="tes-img" />
            <div class="tes-text">
              <h3>Udeme</h3>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div class="tes-card">
            <img src="../images/woman.jpeg" alt="tes-img" class="tes-img" />
            <div class="tes-text">
              <h3>Jane</h3>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
          <div class="tes-card">
            <img src="../images/man.jpeg" alt="tes-img" class="tes-img" />
            <div class="tes-text">
              <h3>John</h3>
              <p>
                lorem artem infin infinito amazil sor paraesin tevez moi madin
                inferma openma
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*<section class="about">
        <div class="ab-left">
          <h1>Little Lemon</h1>
          <p>
            lorem ipsum dolor sit amet dolor, consectoe aditey sede elusitiona
            tempor incidenta et laborate magna a liquor
          </p>
        </div>
        <div class="ab-right">
          <img alt="ab-img" />
        </div>
      </section> */}
    </main>
  );
}
