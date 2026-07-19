function Categories({ setCategory }) {
  return (
    <section id="categories" className="categories">
      <h2>Shop by Category</h2>

      <div className="category-container">
        <div className="category-card" onClick={() => setCategory("Electronics")}>
          🎧 Electronics
        </div>

        <div className="category-card" onClick={() => setCategory("Fashion")}>
          👕 Fashion
        </div>

        <div className="category-card" onClick={() => setCategory("Shoes")}>
          👟 Shoes
        </div>

        <div className="category-card" onClick={() => setCategory("Watches")}>
          ⌚ Watches
        </div>

        <div className="category-card" onClick={() => setCategory("Laptops")}>
          💻 Laptops
        </div>

        <div className="category-card" onClick={() => setCategory("Mobiles")}>
          📱 Mobiles
        </div>
      </div>
    </section>
  );
}

export default Categories;