import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo_1.png";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT SECTION */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
        <div className="brand-text">
          <span className="brand-red">Perfectly</span>
          <span className="brand-black">Placed</span>
        </div>
      </div>

      {/* CENTER MENU */}
      <ul className="nav-links">
        <li>NEW DROPS</li>
        <li>TOPS</li>
        <li>BOTTOMS</li>
        <li>ACCESSORIES</li>
      </ul>

      {/* RIGHT ICONS */}
      <div className="nav-icons">
        <FaSearch />
        <FaShoppingCart />
        <FaUser />
      </div>

    </nav>
  );
}

export default Navbar;
