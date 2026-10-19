import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
return ( <div className="home-page">



<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">


    <div className="carousel-item active">
      <img
        src="ban1.jpg"
        className="d-block w-100"
        alt="Electronics Collection"
      />

      <div className="banner-shade"></div>

      <div className="banner-caption">
        <p className="banner-tagline">SMART TECH. SMART CHOICES.</p>

        <h2>Upgrade Your Everyday</h2>

        <p>
          Discover electronics that make your life easier.
          Find your next favourite gadget!
        </p>

        <Link
          to="/products?category=electronics"
          className="banner-shop-btn"
        >
          Shop Electronics →
        </Link>
      </div>
    </div>


    <div className="carousel-item">
      <img
        src="ban2.png"
        className="d-block w-100"
        alt="Jewellery Collection"
      />

      <div className="banner-shade"></div>

      <div className="banner-caption">
        <p className="banner-tagline">A TOUCH OF ELEGANCE</p>

        <h2>A Little Sparkle Goes a Long Way</h2>

        <p>
          Find beautiful jewellery to complement
          every outfit and every occasion.
        </p>

        <Link
          to="/products?category=jewelery"
          className="banner-shop-btn"
        >
          Explore Jewellery →
        </Link>
      </div>
    </div>


    <div className="carousel-item">
      <img
        src="ban3.jpg"
        className="d-block w-100"
        alt="Fashion Collection"
      />

      <div className="banner-shade"></div>

      <div className="banner-caption">
        <p className="banner-tagline">YOUR STYLE. YOUR STATEMENT.</p>

        <h2>Discover Your Signature Style</h2>

        <p>
          Refresh your wardrobe with stylish finds
          for every mood and every moment.
        </p>

        <Link
          to="/products?category=women's%20clothing"
          className="banner-shop-btn"
        >
          Explore Fashion →
        </Link>
      </div>
    </div>

  </div>


  <button
    className="carousel-control-prev simple-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
    aria-label="Previous slide"
  >
    <span>&lt;</span>
  </button>


  <button
    className="carousel-control-next simple-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
    aria-label="Next slide"
  >
    <span>&gt;</span>
  </button>
</div>
<div className="home-cat">
  <h2>Shop by Category</h2>
  </div>

  <div className="home-categories">
    

    <Link to="/products?category=electronics" className="category-card">
      <img src="laptop.png" alt="Electronics" />
      <h3>Electronics</h3>
      <p>Explore Products →</p>
    </Link>

    <Link to="/products?category=jewelery" className="category-card">
      <img src="jewel.png" alt="Jewellery" />
      <h3>Jewellery</h3>
      <p>Explore Products →</p>
    </Link>

    <Link to="/products?category=men's%20clothing" className="category-card">
      <img src="shirt.jpg" alt="Men's Clothing" />
      <h3>Men's Clothing</h3>
      <p>Explore Products →</p>
    </Link>

    <Link to="/products?category=women's%20clothing" className="category-card">
      <img src="dress.jpg" alt="Women's Clothing" />
      <h3>Women's Clothing</h3>
      <p>Explore Products →</p>
    </Link>

  </div>


  <div className="special-offers">
    <h2>Special Offers</h2>

    <div className="offers-container">

      <div className="offer-card offer-red">
        <h3>Up to 50% OFF</h3>
        <p>On Electronics</p>
        <Link to="/products?category=electronics">
          Shop Now →
        </Link>
      </div>

      <div className="offer-card offer-peach">
        <h3>Flat 30% OFF</h3>
        <p>On Fashion</p>
        <Link to="/products?category=men's%20clothing">
          Shop Now →
        </Link>
      </div>

      <div className="offer-card offer-purple">
        <h3>Up to 40% OFF</h3>
        <p>On Jewellery</p>
        <Link to="/products?category=jewelery">
          Shop Now →
        </Link>
      </div>

      <div className="offer-card offer-green">
        <h3>Extra 20% OFF</h3>
        <p>On Women's Collection</p>
        <Link to="/products?category=women's%20clothing">
          Shop Now →
        </Link>
      </div>

    </div>
  </div>

 
  <div className="home-benefits">
    <div>
      <h3>♡ Easy Shopping</h3>
      <p>Shop from anywhere</p>
    </div>

    <div>
      <h3>♡ Secure Shopping</h3>
      <p>Shop with confidence</p>
    </div>

    <div>
      <h3>♡ Customer Support</h3>
      <p>We're here to help</p>
    </div>

    <div>
      <h3>♡ Happy Shopping</h3>
      <p>Find your favourites</p>
    </div>
  </div>

</div>


);
}

export default Home;
