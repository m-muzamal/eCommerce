import { IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/Cart/cartSlice";

function CartItem() {
  const { items: cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems?.map((item, id) => (
        <div key={id} className="cart-item">
          <div className="cart-img">
            <img src={item.img} alt="product" />
          </div>
          <div className="cart-middle">
            <p className="cart-name">{item.description}</p>
            <div className="cart-btns">
              <button onClick={() => dispatch(decrementQuantity(item.id))}>
                -
              </button>
              <p className="quantity">{item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>
                +
              </button>
            </div>
          </div>
          <div className="cart-right">
            <p className="cart-price">{item.price * item.quantity}.00$</p>
            <IconX
              className="close-icon"
              onClick={() => dispatch(removeFromCart(item.id))}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
