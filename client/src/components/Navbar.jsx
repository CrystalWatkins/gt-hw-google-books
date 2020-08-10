import React from 'react';
import { Link } from "react-router-dom";


const NavbarPage = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/search">Search</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/save">Save</Link>
      </li>
    </ul>
  </div>
</nav>
    )
};

export default NavbarPage;