import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar({ click, setClick }) {
  // const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          Order Tracking
          <i className="fas fa-shipping-fast"></i>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <div className="menu">
          <ul className={click ? "active" : ""}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="#" onClick={closeMobileMenu}>
                Drivers <i className="fas fa-caret-down" />
              </Link>
              <div className="dropdown" >
                {/* <ul>
                  <li>123</li>
                  <li>456</li>
                </ul> */}
              {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
              </div>
            </li>

            <li>
              <Link to="/orders" onClick={closeMobileMenu}>
                Orders
              </Link>
            </li>

            <li>
              <Link to="/summary" onClick={closeMobileMenu}>
                Summary
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
