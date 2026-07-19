function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <h1>Discover the Best Products</h1>

      <p>
        Shop the latest fashion, electronics, and accessories at the best
        prices.
      </p>

      <button onClick={scrollToProducts}>Shop Now</button>
    </section>
  );
}

export default Hero;