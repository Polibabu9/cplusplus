import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './nav.css';
import { Link } from "react-router-dom";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id='Navbar'>
        <div className="container">
          <Link className="navbar-brand" to="/">CPlusPlus.com</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav custom-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/tutorials">Tutorials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/references">References</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">Articles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forum">Forum</Link>
              </li>
            </ul>
            <form className="d-flex ms-3" onSubmit={handleSearch}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search..." 
                aria-label="Search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              <button className="btn btn-outline-light" id="search" type="submit">Search</button>
            </form>
            <div className="login ms-3">
              <Link className="nav-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;