import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-navbar.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-white p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="DEVRE" width={320} />
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/category/abrigo"}>Abrigos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/category/sweater"}>Sweaters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/category/pantalon"}>Pantalones</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;