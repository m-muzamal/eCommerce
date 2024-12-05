import "../stylesheets/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { IconMenu2, IconShoppingCart, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "../modals/AuthModal";
import Login from "../components/Login";
import Register from "../components/Register";
import { logout } from "../redux/User/userSlice";

function Navbar() {
  const { user, accessToken } = useSelector((state) => state.user);
  const { totalItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout(user?.user._id));
  };

  return (
    <>
      <AuthModal open={open} setOpen={setOpen}>
        {loginModal ? (
          <Register setLogin={setLoginModal} setOpen={setOpen} />
        ) : (
          <Login setLogin={setLoginModal} setOpen={setOpen} />
        )}
      </AuthModal>
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
          {accessToken ? (
            <a onClick={handleLogout}>Log Out</a>
          ) : (
            <a onClick={() => setOpen(true)}>Login</a>
          )}
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
              {accessToken && <a className="name">{user.user.name}</a>}
              {accessToken && user.user.isAdmin && (
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/dashboard"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline" : "none",
                    color: isActive ? "#B6002C" : "#000",
                  })}
                >
                  Dashboard
                </NavLink>
              )}
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                to="/"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  color: isActive ? "#B6002C" : "#000",
                })}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/all"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  color: isActive ? "#B6002C" : "#000",
                })}
              >
                categories
              </NavLink>
              {accessToken ? (
                <a onClick={handleLogout}>Log Out</a>
              ) : (
                <a onClick={() => setOpen(true)}>Login</a>
              )}
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
