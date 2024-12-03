import { createContext, useMemo, useState } from "react";
import "../stylesheets/ProductPage.css";
import { items } from "../data/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router";
import Notification from "../components/Notification";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/Cart/cartSlice";

export const CartContext = createContext();

function ProductPage() {
  const { id } = useParams();
  const [image, setImage] = useState();
  const { items: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const item = useMemo(() => {
    const x = items.filter((item) => item.id === parseInt(id));
    setImage(x[0].img);
    return x;
  }, [id]);

  const cartItem = cartItems.find((cartItem) => cartItem.id === item[0].id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 1700);
  };

  return (
    <>
      {notify && (
        <Notification message={"Item has been added to the cart ✅"} />
      )}
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{item[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button
                    onClick={() => dispatch(decrementQuantity(item[0].id))}
                  >
                    -
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    onClick={() => dispatch(incrementQuantity(item[0].id))}
                  >
                    +
                  </button>
                </div>
                <p className="product-price">{item[0].price}.00$</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    dispatch(addToCart(item[0]));
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          {/* <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{item[0].texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{item[0].weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{item[0].size}</p>
            </div>
          </div> */}
        </div>
        <TrendingSlider />
        <Newsletter />
      </div>
    </>
  );
}

export default ProductPage;
