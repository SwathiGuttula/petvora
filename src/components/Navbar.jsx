import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">PetVora</div>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/tips">Tips</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
            </ul>
        </nav>
    );
}
