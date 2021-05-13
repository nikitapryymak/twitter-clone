import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const cPasswordRef = useRef();
    const usernameRef = useRef();
    const [error, setError] = useState(null);
    const history = useHistory();

    async function createUser(e) {
        e.preventDefualt();
        setError(null)
        try {
            await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            setError(null);
            history.push('/')
        } catch (err) {
            console.log(err.message);
            setError(err.message)
        }
    }

    return (
        <div className="SignUp">        
            <h2>Create an Account</h2>
            { error && <p className='error'>Could not create user: {error.message}</p> }
            <form className='login-form' onSubmit={createUser} >
                <input type="text" placeholder='Email *' required ref={emailRef} />
                <input type="password" placeholder='Password *' required ref={passwordRef} />
                <input type="password" placeholder='Confirm Password *' required ref={cPasswordRef} />
                <input id='username' type="text" placeholder='Username *' required ref={usernameRef} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
