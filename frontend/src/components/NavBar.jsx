import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar({ click, setClick, isLogin, setIsLogin }) {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  const logoutUser = () => {
    setIsLogin(false);
  }

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

            <li>
              <Link to="/selectdrivers" onClick={closeMobileMenu}>
                Select Driver
              </Link>
            </li>

            <li>
              <Link to="/orders" onClick={closeMobileMenu}>
                Orders
              </Link>
            </li>

            {isLogin && (
              <li>
                <Link to="/summary" onClick={closeMobileMenu}>
                  Summary
                </Link>
              </li>
            )
            }

            {isLogin ?
              (
                <>
                  <li onClick={toggleDropdown}>
                    <Link to="#" onClick={closeMobileMenu}>
                      <i className="fas fa-user-plus"></i>
                    </Link>
                    <div className="dropdown" >
                      {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
                    </div>
                  </li>
                  <li>
                    <Link to="/" onClick={logoutUser}>
                      <i class="fas fa-sign-out-alt"></i>
                    </Link>
                  </li>
                </>
              )
              :
              (
                <Link to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              )
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
