import React, { useRef } from 'react';
import {  Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {

    const emailInput=useRef('');
    const passwordInput=useRef('');
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
 if(user){
     navigate('/');
 }
    const login=event=>{
        event.preventDefault();
        const email=emailInput.current.value;
        const password=passwordInput.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email,password)
        
    }
    return (
        <Form onSubmit={login} className='w-25 p-5 shadow-lg mx-auto mt-5 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordInput} type="password" placeholder="Password" />
            </Form.Group>
           <button className='btn signin w-100'>Log In</button>
           <p className='pt-4'>New to jack fitness studio? <Link to='/signup' style={{color:'#1CB0E6'}} className='text-decoration-none'>Please sign up </Link></p>
        </Form>
    );
};

export default LogIn;