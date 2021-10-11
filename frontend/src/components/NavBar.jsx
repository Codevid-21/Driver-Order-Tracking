import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar({ click, setClick, isLogin, setIsLogin, setNewUser }) {
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

  const logoutfunction = () => {
    setIsLogin(false);
  }

  const denemeFunction2 = () => {
    setNewUser("User");
    closeMobileMenu();
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
                {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} setNewUser={setNewUser} />}
              </div>
            </li>

            <li>
              <Link to="/orders" onClick={closeMobileMenu}>
                Orders
              </Link>
            </li>

            {isLogin ? (
              <li>
                <Link to="/summary" onClick={closeMobileMenu}>
                  Summary
                </Link>
              </li>
            )
              : null
            }
            <li>
              {isLogin ? (
                <>
                  <Link to="/register" onClick={denemeFunction2}>
                    New User
                  </Link>
                  <Link to="/" onClick={logoutfunction}>
                    Logout
                  </Link>
                  <Link to="/newdriver" onClick={denemeFunction2}>
                    +
                  </Link>
                </>) : (
                <Link to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
