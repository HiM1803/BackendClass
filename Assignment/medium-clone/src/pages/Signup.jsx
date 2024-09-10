import React from "react";
import "./Pages.css";
import {Navbar,Footer} from "../components";


const Signup = () => {
    return (
        <>
        <Navbar />
        <div className="signup">
            <div className="signup-container">
                <h4 className="signup-heading">Join Medium</h4>
                <form className="signup-form">
                    <input type="text" placeholder="Enter your name " required className="signup-name"></input><br />
                    <input type="email" placeholder="Email" className="signup-email"></input><br />
                    <input type="number " maxLength={10} placeholder="mobile no." required className="signup-num"></input><br />
                    <input type="password" minLength={6} placeholder="Enter password" required className="signup-password"></input><br />
                    <input type="password" placeholder="confirm password" required className="signup-confpassword"></input><br />
                    <input type="submit" className="signup-btn"></input>
                    <div className="login-already-account">Already have an account? <a href="/login" className="signup-login">Login</a></div>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Signup;