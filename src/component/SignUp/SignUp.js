import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const emailInput=useRef('');
    const nameInput=useRef('');
    const passwordInput=useRef('');
    const navigate=useNavigate();
//  if(user){
//      navigate('/');
//  }
    const signup=event=>{
        event.preventDefault();
        const email=emailInput.current.value;
        const name=nameInput.current.value;
        const password=passwordInput.current.value;
        console.log(email,password)
        
    }
    return (
        <Form onSubmit={signup} className='w-25 p-5 shadow-lg mx-auto mt-5 rounded'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control ref={nameInput} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordInput} type="password" placeholder="Password" />
            </Form.Group>
           <button className='btn signin w-100'>Sign Up</button>
           <p className='pt-4'>Already have an account? <Link to='/login' style={{color:'#1CB0E6'}} className='text-decoration-none'>Please log in </Link></p>
        </Form>
    );
};

export default SignUp;