import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CartContext } from "../context/temp";

function CartIcon() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="cart-icon"
      title="Shopping Cart"
    >
      <HiOutlineShoppingCart />

      {totalItems > 0 && (
        <span className="cart-count">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;