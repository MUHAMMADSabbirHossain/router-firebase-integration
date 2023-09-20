import React from 'react';
import "./Login.css";
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login now</h3>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
                <br />
            </div>

            <form action="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;