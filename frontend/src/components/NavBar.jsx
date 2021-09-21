import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Order Tracking
          <i class="fas fa-shipping-fast"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
          {/* hamburger icon */}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="#" className="nav-links" onClick={closeMobileMenu}>
              Drivers <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
          </li>

          <li className="nav-item">
            <Link to="/orders" className="nav-links" onClick={closeMobileMenu}>
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/summary" className="nav-links" onClick={closeMobileMenu}>
              Summary
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
