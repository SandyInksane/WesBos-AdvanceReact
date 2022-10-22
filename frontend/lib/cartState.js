import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // our own custom provider
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }
  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </LocalStateProvider>
  );

  function closeCart() {
    setCartOpen(false);
  }
  function openCart() {
    setCartOpen(true);
  }
}

// make a custom hook for accessing the cart local state
function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
