import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Social.css';
import logo from '../../images/google.webp'
import logo2 from '../../images/github.png'
import { Spinner } from 'react-bootstrap';

const Social = () => {
    const [signInWithGoogle,loading] = useSignInWithGoogle(auth);
    const [signInWithGithub ,loading1] = useSignInWithGithub(auth);
    if (loading || loading1) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div className='conainer '>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>Or</p>               
                 <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <button className='btn text-center w-100 bg-light fw-bold social' onClick={() => signInWithGoogle()}> <img width='30px' src={logo} alt="" /> Sign In With Google</button><br />
            <button className='btn text-center w-100 bg-light fw-bold social mt-2' onClick={() => signInWithGithub()}> <img width='20px' src={logo2} alt="" /> Sign In With GitHub</button>

        </div>
    );
};

export default Social;