import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import headphone from "../assets/headphone.jpg";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";

function Products({ search = "", category = "All" }) {
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
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 12499,
      image: watch,
      category: "Watches",
    },
    {
      id: 3,
      name: "Laptop",
      price: 74999,
      image: laptop,
      category: "Laptops",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === product.id
            );

            return (
              <div className="product-card" key={product.id}>
                {/* Wishlist Button */}
                <button
                  className="wishlist-btn"
                  onClick={() => {
                    if (isWishlisted) {
                      removeFromWishlist(product.id);
                      toast.info("Removed from Wishlist");
                    } else {
                      addToWishlist(product);
                      toast.success("Added to Wishlist ❤️");
                    }
                  }}
                >
                  {isWishlisted ? (
                    <HiHeart color="#ef4444" />
                  ) : (
                    <HiOutlineHeart color="#ef4444" />
                  )}
                </button>

                {/* Product Image & Details */}
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <h3>{product.name}</h3>

                  <p className="price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </Link>

                {/* Add to Cart */}
                <button
                  className="add-cart-btn"
                  onClick={() => {
                    addToCart(product);
                    toast.success("Added to Cart 🛒");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        ) : (
          <h3
            style={{
              textAlign: "center",
              width: "100%",
              color: "#6b7280",
            }}
          >
            No products found
          </h3>
        )}
      </div>
    </section>
  );
}

export default Products;