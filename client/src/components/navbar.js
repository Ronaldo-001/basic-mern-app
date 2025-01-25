import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">Welcome to Simple Mern App</Link>
                   <br></br>
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/create" className="nav-item nav-link">Create</Link>
                    <div className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;