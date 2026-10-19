import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

function Product() {
const { productId } = useParams();
const [searchParams] = useSearchParams();
const category = searchParams.get('category');

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

const navigate = useNavigate();
const { addToCart } = useCart();

const handleAddToCart = () => {
  addToCart(product);
};



useEffect(() => {
setLoading(true);
setError(false);
setProduct(null);

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    return res.json();
  })
  .then(data => {
    setProduct(data);
  })
  .catch(() => {
    setError(true);
  })
  .finally(() => {
    setLoading(false);
  });

}, [productId]);

if (loading) {
return <p className="text-center mt-5">Loading product details...</p>;
}

if (error || !product || !product.id) {
return ( <div className="container text-center mt-5"> <h3>Product not found!</h3> <Link to="/products" className="btn btn-danger mt-3">
Back to Products </Link> </div>
);
}

return ( <div className="product-page container mt-4">
<Link
to={
category
? `/products?category=${encodeURIComponent(category)}`
: '/products'
}
className="btn btn-dark mb-4"
>
← Back to Products </Link>

  <div className="product-details-card">
    <div className="product-image-section">
      <img
        src={product.image}
        alt={product.title}
        className="product-details-image"
      />
    </div>

    <div className="product-content">
      <span className="category-badge">
        {product.category}
      </span>

      <h1 className="product-name">
        {product.title}
      </h1>

      <p className="product-description">
        {product.description}
      </p>

      <h2 className="product-price">
        ${product.price.toFixed(2)}
      </h2>

      {product.rating && (
        <p>
          ⭐ {product.rating.rate}/5
          {' '}({product.rating.count} reviews)
        </p>
      )}
      
      <div className="mt-4">
  <button
    className="btn btn-danger me-3"
    onClick={handleAddToCart}
  >
    Add to Cart
  </button>

  <button
    className="btn btn-dark"
    onClick={() => navigate('/cart')}
  >
    Go to Cart
  </button>
</div>
    </div>
  </div>
</div>



);
}

export default Product;
