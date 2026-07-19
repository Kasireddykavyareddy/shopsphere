import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Shipping Address is required.";
    }

    // City
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    // State
    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }

    // PIN
    if (!formData.pin.trim()) {
      newErrors.pin = "PIN Code is required.";
    } else if (!/^\d{6}$/.test(formData.pin)) {
      newErrors.pin = "PIN Code must be exactly 6 digits.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    toast.success("Order Placed Successfully! 🎉");

    setTimeout(() => {
      navigate("/order-success");
    }, 800);
  };

  return (
    <div className="page">
      <h1>Checkout</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && (
          <p className="error-text">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <p className="error-text">{errors.email}</p>
        )}

        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className={errors.address ? "input-error" : ""}
        />
        {errors.address && (
          <p className="error-text">{errors.address}</p>
        )}

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? "input-error" : ""}
        />
        {errors.city && (
          <p className="error-text">{errors.city}</p>
        )}

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className={errors.state ? "input-error" : ""}
        />
        {errors.state && (
          <p className="error-text">{errors.state}</p>
        )}

        <input
          type="text"
          name="pin"
          placeholder="PIN Code"
          value={formData.pin}
          onChange={handleChange}
          className={errors.pin ? "input-error" : ""}
        />
        {errors.pin && (
          <p className="error-text">{errors.pin}</p>
        )}

        <button type="submit">
          Place Order
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/cart">← Back to Cart</Link>
      </p>
    </div>
  );
}

export default Checkout;