import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/product/productsSlice';
import '../styles/ProductList.css';

function ProductList() {
const dispatch = useDispatch();

const { items, status, error } = useSelector(
(state) => state.products
);

useEffect(() => {
if (status === 'idle') {
dispatch(fetchProducts());
}
}, [dispatch, status]);

if (status === 'loading') {
return <h3 className="text-center mt-4">Loading products...</h3>;
}

if (status === 'failed') {
return <h3 className="text-center mt-4">Error: {error}</h3>;
}

return ( <div className="product-list"> <h2>Our Products</h2>


  <div className="product-grid">
    {items.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.title} />

        <h5>{product.title}</h5>

        <p>${product.price}</p>
      </div>
    ))}
  </div>
</div>


);
}

export default ProductList;
