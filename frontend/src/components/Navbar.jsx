import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/ProductPage";
import { IconMenu2, IconShoppingCart, IconX } from "@tabler/icons-react";
import { useSelector } from "react-redux";

function Navbar() {
  const { items, totalItems } = useSelector((state) => state.cart);
  console.log(items);
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const { cartItem } = useContext(CartContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <IconX onClick={() => setMobileNav(!mobileNav)} className="x-mobile" />
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/">
            Home
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            categories
          </Link>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">Your Shopping Cart ({totalItems})</h2>
          <IconX onClick={openCart} />
        </div>

        <div className="cart-body">
          {totalItems === 0 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <h1 className="logo">ShopSphere</h1>
            </Link>
            <div className="nav-links">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/19"
              >
                product page
              </Link>
              <i
                data-array-length={totalItems}
                onClick={openCart}
                className={`${
                  totalItems === 0 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
              </i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={totalItems}
                onClick={openCart}
                className={`hamburger-cart ${
                  totalItems === 0 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
              </i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="hamburger-hamb"
              >
                <IconMenu2 />
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;