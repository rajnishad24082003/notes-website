import React from "react";
import { Link } from "react-router-dom";
export default function Navbar()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-mycolor">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Webcreater</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Creator
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Raj Nishad</Link></li>
            <li><Link className="dropdown-item" to="/">Sri Sri Anumalikh</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
          <Link className="btn me-2" to="/Signin">sign in</Link>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
