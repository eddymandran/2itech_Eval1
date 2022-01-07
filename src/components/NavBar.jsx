import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse container-fluid" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/myorder">
              My orders
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/product">
              Admin product
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <Link className="btn btn-primary" to="/cart">
              <svg width="1em" height="1em" viewBox="0 0 16 16">
                <g fill="currentColor">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0z"></path>
                </g>
              </svg>
              &nbsp;
              {cart.length > 0 && (
                <span className="badge bg-light text-dark">{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
