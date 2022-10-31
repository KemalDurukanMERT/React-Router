import logo from "../img/logo.png"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                People
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                Paths
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
