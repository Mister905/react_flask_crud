import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to={"/account"}>
              <i className="material-icons left account-icon">settings</i>
              Account
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <i className="material-icons left account-icon">settings</i>
              Account
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <i className="material-icons left account-icon">settings</i>
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
