import "./styles.css";
import "../../utility.css";
import { useAuth } from '../../contexts/authContext/index';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';

import { Link, Form, Navigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function isInputInvalid(text) {
        return !text || text.trim() === '';
    }

    const onLogin = async (e) => {
        e.preventDefault();

        setErrorMessage("");

        if (isInputInvalid(email) || isInputInvalid(password)) {
            setErrorMessage("*Invalid input");
            return;
        }

        if(!isSigningIn) {
            setIsSigningIn(true)
            try {
                await doSignInWithEmailAndPassword(email, password);
                // console.log(user.user.metadata.createdAt);
                // console.log(user.user.metadata.lastLoginAt);
            } catch (error) {
                console.log("error");
                console.error("Sign-in failed:", error);
                setErrorMessage("*Sign-in failed. Please check your credentials.");
            } finally {
                setIsSigningIn(false);
            }
        }
    }
    return (
        <>
            {userLoggedIn && (<Navigate to={'/posts'} replace={true} />)}
            <Form method="post" className="login-form">
                <h1>Login</h1>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />

                <button
                    disabled={isSigningIn}
                    onClick={onLogin}>
                    {isSigningIn ? 'Logging In...' : 'Continue'}
                </button>
                {errorMessage && (
                    <span className='text-red-600'>{errorMessage}</span>
                )}
                <p>Don't have an account? <Link type="button" to="/signup">Register here</Link></p>
            </Form>
        </>
    );
}

export default Login;