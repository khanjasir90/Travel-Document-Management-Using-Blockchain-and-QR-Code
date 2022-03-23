import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import "./Login.css";
import LoginImg from "../../assets/images/login.svg";

const LoginScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        function checkUserData() {
          const item = localStorage.getItem('authToken')
      
          if (item) {
            navigate("/dashboard");
          }
        }
      
        window.addEventListener('storage', checkUserData)
      
        return () => {
          window.removeEventListener('storage', checkUserData)
        }
      }, [])

    const LoginHandler = async (e) => {
        e.preventDefault();
        const info = { email: email, password: password };
        try {
            let response = await fetch("http://localhost:5000/user/login", {
                method: "POST",
                body: JSON.stringify(info),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            console.log(json);
            localStorage.setItem("authToken", json.token);
            localStorage.setItem("email", email);
            navigate("/dashboard");

        } catch (error) {
            console.log(error)
            setError(`Email or password is incorrect`)
            setTimeout(() => {
                setError("")
            }, 7000);
        }
    }

    return (

        <div className="login-screen">
            <div className="imgBx">
                <img src={LoginImg} alt="loginimage" className='Login_image' />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    {error && <div className="error-message" style={{ marginBottom: "5px" }}><Alert variant='danger'>{error}</Alert></div>}
                    <form onSubmit={(e) => { LoginHandler(e) }}>
                        <div className="inputBx">
                            <span>Email</span>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="forgot-password">
                            <Link to="/forgotpassword" className="forgotLink">Forgot password?</Link>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Login" />
                        </div>
                        <div className="inputBx">
                            <p>Don't have an account? <Link to="/signup" className="signupLink">Signup</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    )
}

export default LoginScreen