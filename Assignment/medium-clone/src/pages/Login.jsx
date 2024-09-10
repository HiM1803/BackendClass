import React from "react";
import { Navbar,Footer } from "../components";

const Login = () => {
    return (
        <>
        <Navbar />
        <div className="login">
            <div className="login-container">
                <h4 className="login-heading">Welcome Back,</h4>
                <form className="login-form">
                    <input type="email" placeholder="Email" className="login-email" required /><br />
                    <input type="password" placeholder="Password" className="login-password" required /><br />
                    <button type="submit" className="login-btn">Login</button>
                    <div className="login-forgot-password">Forgot Password?</div>
                    <div className="login-create-account">Don't have an account? <a href="/Signup" className="login-signup">create account</a></div>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Login;