import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";
import CartWithItems from "./components/CartWithItems";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories/:category" element={<Categories />} />
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
