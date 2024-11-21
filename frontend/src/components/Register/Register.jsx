import { useState } from "react";
import styles from './Register.module.css'
import { Link } from 'react-router-dom'

function Register() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


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
                    <label htmlFor="phone" >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                <div className={styles.comp}>
                    <label htmlFor="confirm-password" >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Cofirm your password"
                        required
                    />
                </div>
                <button type="submit" className={styles.submit}>
                    Register
                </button>
            </form>

            <div className={styles.redirect}>
                Already have an account? &nbsp;
                <Link to="/login">Login</Link>
            </div>
        </section>
    );
}

export default Register;
