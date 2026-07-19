import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Email Validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Password Validation
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("No account found. Please sign up first.");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      toast.success(`Welcome, ${savedUser.name}! 🎉`);

      navigate("/");
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>

      <form className="auth-form" onSubmit={handleLogin}>
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

        <button type="submit">Login</button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;