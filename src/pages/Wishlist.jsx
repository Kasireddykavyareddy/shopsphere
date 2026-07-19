import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>Your wishlist is empty.</h2>
      ) : (
        wishlist.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>

              <p>₹{item.price.toLocaleString("en-IN")}</p>

              <button
                className="add-cart-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Wishlist;