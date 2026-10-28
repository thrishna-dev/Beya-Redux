import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '../CartContext';
import {
  fetchProducts,
  setCategory,
} from '../features/product/productsSlice';
function Products() {
const dispatch = useDispatch();

const { items: products, status, error } = useSelector(
(state) => state.products
);

const [searchParams, setSearchParams] = useSearchParams();

const category = useSelector(
  (state) => state.products.selectedCategory
);
const { addToCart } = useCart();

const handleAddToCart = (product) => {
addToCart(product);
};

useEffect(() => {
if (status === 'idle') {
dispatch(fetchProducts());
}
}, [dispatch, status]);

useEffect(() => {
  const urlCategory = searchParams.get('category');

  dispatch(setCategory(urlCategory || 'all'));
}, [searchParams, dispatch]);

const filteredProducts =
  category === 'all'
    ? products
    : products.filter(
        (product) => product.category === category
      );

if (status === 'idle' || status === 'loading') {
return <p className="text-center mt-5">Loading products...</p>;
}

if (status === 'failed') {
return ( <p className="text-center mt-5 text-danger">
Failed to load products. Please try again. {error} </p>
);
}

return ( <div className="products-page"> 
<h2 className="mb-4">
  {category === 'all' ? 'All Products' : category}
</h2>

<div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
  <button
    className="btn btn-dark"
    onClick={() => {
      dispatch(setCategory('all'));
      setSearchParams({});
    }}
  >
    All Products
  </button>

  <button
    className="btn btn-danger"
    onClick={() => {
      dispatch(setCategory('electronics'));
      setSearchParams({ category: 'electronics' });
    }}
  >
    Electronics
  </button>

  <button
    className="btn btn-danger"
    onClick={() => {
      dispatch(setCategory('jewelery'));
      setSearchParams({ category: 'jewelery' });
    }}
  >
    Jewelry
  </button>

  <button
    className="btn btn-danger"
    onClick={() => {
      dispatch(setCategory("men's clothing"));
      setSearchParams({ category: "men's clothing" });
    }}
  >
    Men's Clothing
  </button>

  <button
    className="btn btn-danger"
    onClick={() => {
      dispatch(setCategory("women's clothing"));
      setSearchParams({ category: "women's clothing" });
    }}
  >
    Women's Clothing
  </button>
</div>

  <div className="row">
    {filteredProducts.map((product) => (
      <div className="col-md-4 mb-4" key={product.id}>
        <Link
          to={
            category
              ? `/products/${product.id}?category=${encodeURIComponent(category)}`
              : `/products/${product.id}`
          }
          className="product-card-link"
        >
          <div className="card h-100 shadow-sm product-card">
            <img
              src={product.image}
              className="card-img-top p-3"
              alt={product.title}
              style={{
                height: '200px',
                objectFit: 'contain',
              }}
            />

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                {product.title.length > 30
                  ? product.title.substring(0, 30) + '...'
                  : product.title}
              </h5>

              <p className="card-text fw-bold">
                ${product.price.toFixed(2)}
              </p>

              <span className="btn btn-primary mt-auto">
                View Details
              </span>

              <button
                className="btn btn-danger mt-2"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>

  {filteredProducts.length === 0 && (
    <p className="text-center">
      No products found in this category.
    </p>
  )}
</div>


);
}

export default Products;
