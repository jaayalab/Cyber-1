import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

/**
 * @function Login
 * @description The login component allows users to sign in to the application using their email and password.
 * On successful login, users are redirected to the profile page. If the login fails, an error message is displayed.
 *
 * @component
 * @returns {JSX.Element}
 */
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [keyLogs, setKeyLogs] = useState([]);

    /**
     * Handles the form submission for user login using email and password.
     * If the login is successful, the user is redirected to the profile page.
     * If the login fails, an error message is shown.
     *
     * @param {React.FormEvent<HTMLFormElement>} e
     * @returns {void}
     */
    const loginWithUsernameAndPassword = (e) => {
        e.preventDefault();

        // Simulate successful login and navigate to profile page
        if (email && password) {
            console.log("Captured Keystrokes:", keyLogs.join(''));
            navigate("/profile");
        } else {
            setNotice("You entered a wrong username or password.");
        }
    };

    /**
     * Handles capturing of keystrokes and logs them.
     *
     * @param {React.KeyboardEvent<HTMLInputElement>} e
     */
    const handleKeyPress = (e) => {
        // Only log printable characters
        const keyValue = e.key.length === 1 ? e.key : `[${e.code}]`;
        setKeyLogs((prevLogs) => [...prevLogs, keyValue]);
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h1 className="form-title">Ayala's Cool Kickz</h1>
                <form className="login-form" onSubmit={loginWithUsernameAndPassword}>
                    {notice && (
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Need to sign up for an account? <Link to="/signup">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
