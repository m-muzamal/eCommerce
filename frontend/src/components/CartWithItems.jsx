import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";

function CartWithItems() {
  const { items, totalPrice, totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {items.length !== 0 ? <CartItem /> : <EmptyCart />}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice + ".00$"}</p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
