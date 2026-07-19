import {
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineShoppingBag,
} from "react-icons/hi";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About ShopSphere</h1>

        <p className="about-text">
          Welcome to <strong>ShopSphere</strong>, your trusted online shopping
          destination. We are committed to delivering high-quality products at
          affordable prices while providing a fast, secure, and enjoyable
          shopping experience.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <HiOutlineTruck className="feature-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping across the country.</p>
          </div>

          <div className="feature-card">
            <HiOutlineShieldCheck className="feature-icon" />
            <h3>Secure Shopping</h3>
            <p>Your payments and personal information are always protected.</p>
          </div>

          <div className="feature-card">
            <HiOutlineShoppingBag className="feature-icon" />
            <h3>Quality Products</h3>
            <p>Carefully selected products that deliver excellent value.</p>
          </div>
        </div>

        <p className="about-footer">
          Thank you for choosing <strong>ShopSphere</strong>. Happy Shopping!
        </p>
      </div>
    </div>
  );
}

export default About;