import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import {
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";

import { CartContext } from "../context/temp";
import { WishlistContext } from "../context/WishlistContext";

import headphone from "../assets/headphone.jpg";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 8299,
      image: headphone,
      description:
        "High-quality wireless headphones with crystal-clear sound and long battery life.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 12499,
      image: watch,
      description:
        "Track your fitness, receive notifications, and stay connected all day.",
    },
    {
      id: 3,
      name: "Laptop",
      price: 74999,
      image: laptop,
      description:
        "Powerful laptop for work, gaming, and everyday productivity.",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.info("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to Wishlist ❤️");
    }
  };

  const handleCart = () => {
    addToCart(product);
    toast.success("Added to Cart 🛒");
  };

  return (
    <div className="details-page">
      <div className="details-card">
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="details-image"
          />

          <button
            className="wishlist-btn"
            onClick={handleWishlist}
          >
            {isWishlisted ? (
              <HiHeart color="red" size={24} />
            ) : (
              <HiOutlineHeart color="red" size={24} />
            )}
          </button>
        </div>

        <div className="details-info">
          <h1>{product.name}</h1>

          <h2>₹{product.price.toLocaleString("en-IN")}</h2>

          <p>{product.description}</p>

          <button
            className="add-cart-btn"
            onClick={handleCart}
          >
            Add to Cart
          </button>

          <Link to="/products">
            <button className="continue-btn">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;