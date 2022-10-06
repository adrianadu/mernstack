import React, { useState } from 'react';
import './Login.css';
import Logo1 from './images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import userEvent from '@testing-library/user-event';
import dashboard from "./Dashboard";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                if (email === "admin@gmail.com") {
                    navigate('/dashboard')
                } else {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if (auth){
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to="/" >
        <img className='login__logo' src={Logo1} alt=""/>
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login__signInButton'> Sign-in</button>
            </form>
            <p>
                By signing-in you agree to Mresult's conditions of use
                and sale. Please see our Privacy Notice, Our Cookies Notice and our 
                Interest-Based Ads
            </p>
            <button onClick={register} className='login__RegisterButton'> Create Your Mresult Account</button>
        </div>
    </div>
  )
}

export default Login;