import { auth, provider } from "../firebase"
import { Link, useHistory } from 'react-router-dom'
import { useState } from "react";
import twitter from '../img/twitter.png';
import google from '../img/google.png';
import './Login.css'

export default function Login() {

    const [error, setError] = useState('Account with that email already exists!');
    const history = useHistory()

    async function googleLogin() {
        try {
            await auth.signInWithPopup(provider);
            setError(null);
            history.push('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className='Login'>
            <div className='login-title'>
                <img className='twitter-logo' src={twitter} alt="twitter-logo"/>
                <h1>Login</h1>
            </div>
                
            <button className='google-login' onClick={googleLogin}>
                <img src={google} alt="google-logo"/>
                Sign in with Google
            </button>
            { error && <p className='error'>{error.message}</p>}
            <p>or <Link to='/'>continue with without an account</Link></p>

        </div>
    )
}