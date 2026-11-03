import React, { useEffect } from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '../CartContext';
import { fetchProductById } from '../features/product/productsSlice';

function Product() {
const { productId } = useParams();
const [searchParams] = useSearchParams();
const category = searchParams.get('category');

const dispatch = useDispatch();
const navigate = useNavigate();

const { selectedProduct: product, detailStatus, detailError } = useSelector(
(state) => state.products
);

const { addToCart } = useCart();

useEffect(() => {
dispatch(fetchProductById(productId));
}, [dispatch, productId]);

const handleAddToCart = () => {
if (product) {
addToCart(product);
}
};

if (detailStatus === 'loading' || detailStatus === 'idle') {
return <p className="text-center mt-5">Loading product details...</p>;
}

if (detailStatus === 'failed' || !product || !product.id) {
return ( <div className="container text-center mt-5"> <h3>Product not found!</h3>
{detailError && <p>{detailError}</p>} <Link to="/products" className="btn btn-danger mt-3">
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
