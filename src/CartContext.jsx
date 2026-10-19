import React, {
createContext,
useContext,
useState,
useEffect
} from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
const [cartItems, setCartItems] = useState(() => {
return JSON.parse(localStorage.getItem('cartItems')) || [];
});

useEffect(() => {
localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

const addToCart = (product) => {
setCartItems(previousItems => {
const existingItem = previousItems.find(
item => item.id === product.id
);


  if (existingItem) {
    return previousItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [ 
    ...previousItems,
    { ...product, quantity: 1 }
  ];
});


};

const removeFromCart = (productId) => {
setCartItems(previousItems =>
previousItems.filter(item => item.id !== productId)
);
};


const updateQuantity = (productId, change) => {
  setCartItems(previousItems =>
    previousItems
      .map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

return (
<CartContext.Provider
  value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
>
{children}
</CartContext.Provider>
);
}

export function useCart() {
return useContext(CartContext);
}
