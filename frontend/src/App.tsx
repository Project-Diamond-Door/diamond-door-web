
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button className="brand-button" onClick={openMenu}>
            &#9776;
          </button>
          <a href="/">Diamond Door</a>
        </div>
        <div className="header-links">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button
          className="sidebar-close-button"
          onClick={closeMenu}
        >
          x
        </button>
        <ul>
          <li><a href="/">Pants</a></li>
          <li><a href="/">Shirts</a></li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            {[1, 2, 3].map((item) => (
              <li className="product" key={item}>
                <div className="product">
                  <img
                    className="product-image"
                    src="/images/d1.jpg"
                    alt="Slim Shirt"
                  />
                  <div className="product-name">
                    <a href="/">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">
                    4.5 Stars (10 Reviews)
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="footer">
        © 2022 Diamond Door
      </footer>
    </div>
  );
}

export default App;
