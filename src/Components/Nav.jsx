import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link to="/people" className="nav-link">
                People
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link to="Paths" className="nav-link">
                Paths
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
