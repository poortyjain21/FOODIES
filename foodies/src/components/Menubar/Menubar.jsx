import React from "react";
import "./Menubar.css";
import { assests } from "../../assets/assets";

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={assests.logo}
          style={{ height: 48, width: 48 }}
          className="logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="menubar-right">
            <div className="position-relative">
              <img
                src={assests.cart}
                height={32}
                width={32}
                className="position-relative"
              />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning ">
                5
              </span>
            </div>
            <button type="button" class="btn btn-outline-primary">
              Login
            </button>
            <button type="button" class="btn btn-outline-success">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
