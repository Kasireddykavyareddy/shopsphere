import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import CartIcon from "./CartIcon";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    toast.info("Logged out successfully 👋");

    navigate("/");

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <HiOutlineShoppingBag />
          <span>ShopSphere</span>
        </Link>
      </div>

      {/* Navigation */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <a href="#categories">Categories</a>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-actions">
        <Link to="/wishlist" className="icon-btn" title="Wishlist">
          <HiOutlineHeart />
        </Link>

        <CartIcon />

        {isLoggedIn ? (
          <div
            className="profile"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <button className="profile-btn">
              <HiOutlineUserCircle />
            </button>

            {showMenu && (
              <div className="dropdown">
                <div className="dropdown-header">
                  👋 {user?.name}
                </div>

                <Link to="/profile">
                  👤 My Profile
                </Link>

                <Link to="/orders">
                  📦 My Orders
                </Link>

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login">Login</Link>

            <Link
              to="/signup"
              className="signup-btn"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;