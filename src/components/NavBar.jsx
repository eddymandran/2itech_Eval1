import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="collapse navbar-collapse container-fluid" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/dishe">Admin Dishe</Link>
                    </li>
                </ul>
                <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                        <Link className="btn btn-primary" to="/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;