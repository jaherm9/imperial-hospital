import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import "./Header.css";

const Header = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg blue-400">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Imperial Hospital{" "}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav align-items-center">
              <Link to="/home" className="nav-link active" aria-current="page">
                {" "}
                Home
              </Link>

              <Link to="/doctors" className="nav-link ">
                {" "}
                Doctors{" "}
              </Link>
              <Link to="/services" className="nav-link ">
                {" "}
                Services{" "}
              </Link>

              <Link to="/appointment" className="nav-link">
                {" "}
                Appointment{" "}
              </Link>

              <Link to="/contact" className="nav-link">
                {" "}
                Contact{" "}
              </Link>

              <Link to="/register" className="nav-link">
                {" "}
                Register
              </Link>
              <Link to="/login" className="nav-link">
                {" "}
                Login
              </Link>

              <span>{user.displayName}</span>
              {user.email && (
                <button onClick={handleLogOut} className="btn btn-light">
                  {" "}
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
