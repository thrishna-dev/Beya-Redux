import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function Header() {
const { cartItems } = useCart();

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return ( <header className="header"> <h1>Beya</h1>


  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/products">Products</Link>
    <Link to="/login">Login</Link>

<Link to="/cart" className="cart-icon">
<i className="bi bi-cart3"></i>

  <span className="cart-badge">{cartCount}</span>
</Link>
  </nav>
</header>


);
}

export default Header;
