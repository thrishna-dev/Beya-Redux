import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="beya-footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h2>BEYA<span>.</span></h2>

          <p>
            Your one-stop shopping destination.
            Discover great products, explore new styles,
            and enjoy shopping with Beya.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h4>Shop By Category</h4>

          <ul>
            <li>
              <Link to="/products?category=electronics">
                Electronics
              </Link>
            </li>

            <li>
              <Link to="/products?category=jewelery">
                Jewellery
              </Link>
            </li>

            <li>
              <Link to="/products?category=men's%20clothing">
                Men's Clothing
              </Link>
            </li>

            <li>
              <Link to="/products?category=women's%20clothing">
                Women's Clothing
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h4>Customer Support</h4>

          <ul>
            <li>
              <Link to="/contact">Contact Support</Link>
            </li>

            <li>
              <Link to="/cart">My Cart</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Beya. All Rights Reserved.
        </p>

        <p>Happy Shopping with Beya ❤️</p>
      </div>

    </footer>
  );
}

export default Footer;