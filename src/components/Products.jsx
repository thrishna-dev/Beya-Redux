import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../CartContext';

function Products() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

const [searchParams, setSearchParams] = useSearchParams();
const category = searchParams.get('category');

const { addToCart } = useCart();

const handleAddToCart = (product) => {
addToCart(product);

};

useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then(res => {
if (!res.ok) {
throw new Error('Failed to fetch products');
}
return res.json();
})
.then(data => setProducts(data))
.catch(() => setError(true))
.finally(() => setLoading(false));
}, []);

const filteredProducts = category
? products.filter(product => product.category === category)
: products;

if (loading) {
return <p className="text-center mt-5">Loading products...</p>;
}

if (error) {
return ( <p className="text-center mt-5 text-danger">
Failed to load products. Please try again. </p>
);
}

return ( <div className="products-page"> <h2 className="mb-4">
{category ? category : 'All Products'} </h2>


  <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
    <button
      className="btn btn-dark"
      onClick={() => setSearchParams({})}
    >
      All Products
    </button>

    <button
      className="btn btn-danger"
      onClick={() => setSearchParams({ category: 'electronics' })}
    >
      Electronics
    </button>

    <button
      className="btn btn-danger"
      onClick={() => setSearchParams({ category: 'jewelery' })}
    >
      Jewelry
    </button>

    <button
      className="btn btn-danger"
      onClick={() => setSearchParams({ category: "men's clothing" })}
    >
      Men's Clothing
    </button>

    <button
      className="btn btn-danger"
      onClick={() => setSearchParams({ category: "women's clothing" })}
    >
      Women's Clothing
    </button>
  </div>

  <div className="row">
    {filteredProducts.map(product => (
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
                objectFit: 'contain'
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
</button>   </div>
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
