import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li>BLOGS</li>
        </ul>

        <button className="nav-connect-btn">
          <span className="btn-icon">+</span>
          <span className="btn-text">CONNECT NOW</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;