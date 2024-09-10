import React from "react";
import "./Style.css";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="navbar-left">
                <img className="nav-img" src={require("./medium-logo.jpg")} />
                </div>
                <div className="navbar-right">
                    <a href="/">Home</a>
                    <a href="/Signup">Signup</a>
                    <a href="/Login">Login</a>
                    <button>Get Started</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;