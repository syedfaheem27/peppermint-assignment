import { useState } from "react";
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating a login action
        console.log("Phone:", phone);
        console.log("Password:", password);
        alert("Login submitted");
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Login</h2>
            <form onSubmit={handleSubmit} className={styles['login-page']}>
                <div className={styles.comp}>
                    <label htmlFor="username" >
                        UserName
                    </label>
                    <input
                        type="tel"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div className={styles.comp}>
                    <label htmlFor="password" >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className={styles.submit}>
                    Login
                </button>
            </form>

            <div className={styles.redirect}>
                Don't have an account? &nbsp;
                <Link to="/register">Register</Link>
            </div>
        </section>
    );
}

export default LogIn;
