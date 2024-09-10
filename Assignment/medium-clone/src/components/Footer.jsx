import React from "react";
import "./Style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <ul>
                    <li><a href="/Help">Help</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Terms">Terms</a></li>
                    <li><a href="/Teams">Teams</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;