import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './CheckOut.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const emailInput = useRef('');
    const nameInput = useRef('');
    const phoneInput = useRef('');
    const adressInput = useRef('');

    const fillUp = event => {
        event.preventDefault();
        const email = emailInput.current.value;
        const name = nameInput.current.value;
        const phone = phoneInput.current.value;
        const adress = adressInput.current.value;
        if (email && name && phone && adress) {
            toast('Confirm submit!!');

        }
        else {
            toast('Please fill up the full form.');

        }
    }
    return (
        <div className='container'>
            <h1 className='text-center fw-bold pt-3'>Fill up the form</h1>
            <Form onSubmit={fillUp} id='submit-form' className='submit-form w-25 p-lg-5 mx-auto rounded mt-4 shadow-lg'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameInput} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control ref={phoneInput} type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAdress">
                    <Form.Label>Your Adress</Form.Label>
                    <Form.Control ref={adressInput} type="text" placeholder="Adress" />
                </Form.Group>
                <div className='text-center'>
                    <button className='btn submit-btn rounded-pill'>Submit</button>
                </div>
                <ToastContainer ></ToastContainer>

            </Form>
        </div>
    );
};

export default CheckOut;