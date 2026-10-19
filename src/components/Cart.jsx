import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function Cart() {
const { cartItems, removeFromCart, updateQuantity } = useCart();
const total = cartItems.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return ( <div className="cart-page"> <h1>My Cart</h1>

  {cartItems.length === 0 ? (
    <div className="text-center mt-5">
      <h4>Your shopping cart is empty.</h4>
      <Link to="/products" className="btn btn-danger mt-3">
        Continue Shopping
      </Link>
    </div>
  ) : (
    <>
      {cartItems.map(item => (
        <div className="card mb-3 p-3" key={item.id}>
          <div className="row align-items-center">
            <div className="col-md-2">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div className="col-md-7">
              <h5>{item.title}</h5>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
  <span>Quantity: </span>

  <button
    className="btn btn-outline-danger btn-sm"
    onClick={() => updateQuantity(item.id, -1)}
  >
    −
  </button>

  <span className="mx-3">{item.quantity}</span>

  <button
    className="btn btn-outline-danger btn-sm"
    onClick={() => updateQuantity(item.id, 1)}
  >
    +
  </button>
</div>
              <p>
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

              <button className="btn btn-danger ms-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="text-end mt-4 mb-4">
  <h3 className="text-white">Total: ${total.toFixed(2)}</h3>


        <Link to="/products" className="btn btn-dark me-2">
          Continue Shopping
        </Link>

        <button className="btn btn-dark me-2">
          Buy Now
        </button>
      </div>
    </>
  )}
</div>


);
}

export default Cart;
