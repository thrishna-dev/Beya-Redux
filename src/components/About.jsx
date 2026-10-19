import React from 'react';

function About() {
return ( <div className="about-page">


  <div className="about-banner">
    <h1>About Beya</h1>
    <p>Your Style. Your Choice. Your Shopping Destination.</p>
  </div>

  <div className="about-content">

    <div className="about-intro">
      <h2>Welcome to <span>Beya</span></h2>
      <p>
        Beya is an online shopping platform designed to make shopping
        simple, convenient, and enjoyable. We bring a variety of products
        right to your fingertips, helping you find what you need with ease.
      </p>
    </div>

    <div className="mission-section">
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide every customer with a smooth shopping
        experience through quality products, affordable prices, and
        reliable service. We believe online shopping should be easy,
        enjoyable, and accessible to everyone.
      </p>
    </div>

    <div className="why-beya">
      <h2>Why Choose Beya?</h2>

      <div className="row mt-4">

        <div className="col-md-4 mb-3">
          <div className="about-card">
            <div className="about-icon">🛍️</div>
            <h4>Wide Variety</h4>
            <p>
              Explore a variety of products to suit your needs and style.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="about-card">
            <div className="about-icon">💰</div>
            <h4>Affordable Prices</h4>
            <p>
              Discover great choices at prices that fit your budget.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="about-card">
            <div className="about-icon">❤️</div>
            <h4>Customer First</h4>
            <p>
              We aim to make every shopping experience simple and enjoyable.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>


);
}

export default About;
