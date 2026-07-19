import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi";

function OrderSuccess() {
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">
      <div className="success-card">
        <HiCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <p className="success-text">
          Thank you for shopping with <strong>ShopSphere</strong>.
        </p>

        <p className="success-text">
          Your order has been confirmed and is being processed.
        </p>

        <div className="order-details">
          <div className="detail-row">
            <span>Order ID</span>
            <strong>#{orderId}</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>
            <strong className="status-success">Confirmed</strong>
          </div>
        </div>

        <Link to="/">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;