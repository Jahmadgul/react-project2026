import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">AllShop</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link> 
          <Link to="/checkout" className="navbar-link">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}