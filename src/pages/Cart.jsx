import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/temp";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <HiOutlineShoppingCart className="empty-cart-icon" />

          <h2>Your Cart is Empty</h2>

          <p>
            Looks like you haven't added any products yet.
          </p>

          <Link to="/products">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>₹{item.price.toLocaleString("en-IN")}</p>

                <div className="qty-buttons">
                  <button onClick={() => decreaseQty(item.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2 className="total-price">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </h2>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/checkout">
              <button className="add-cart-btn">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;