import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name
    if (!name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // Email
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Password
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm Password
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Duplicate Email
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email.toLowerCase() === email.toLowerCase()
    ) {
      newErrors.email = "An account with this email already exists.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Account Created Successfully! 🎉");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});

    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Create Account</h1>

      <form className="auth-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && (
          <p className="error-text">{errors.name}</p>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <p className="error-text">{errors.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && (
          <p className="error-text">{errors.password}</p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          className={
            errors.confirmPassword ? "input-error" : ""
          }
        />
        {errors.confirmPassword && (
          <p className="error-text">
            {errors.confirmPassword}
          </p>
        )}

        <button type="submit">
          Sign Up
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;