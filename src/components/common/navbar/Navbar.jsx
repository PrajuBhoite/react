import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
  <menu className="navbar" data-testid="navbar">
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/"}>
        Home
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/schools"}>
        Schools
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/greet"}>
        Greet
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/sign-in"}>
        Sign In
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/sign-up"}>
        Sign Up
      </NavLink>
    </li>
  </menu>
);
