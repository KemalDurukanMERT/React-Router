import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item ms-auto">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink
                to="/people"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
              >
                People
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink
                to="Paths"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
              >
                Paths
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
