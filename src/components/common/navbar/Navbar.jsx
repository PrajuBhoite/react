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
    <li className="navbar-item ">
<NavLink className=" dropdown navbar-link" to={"/school"}>
        School List
        <div class="dropdown-content">
  <a href="https://blog.hubspot.com/">English Medium School</a>
  <a href="https://academy.hubspot.com/" >High School</a>
  <a href="https://www.youtube.com/user/hubspot">Gurukul school</a>
  </div>
      </NavLink>
</li>
  </menu>
);
