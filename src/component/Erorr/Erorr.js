import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css'

const Erorr = () => {
    return (
        < div className='container error d-flex justify-content-center  align-items-center'>
            <div className='text-center '>
                <h1 className='error-title'>Oops<i className="fas fa-exclamation-triangle ps-2"></i></h1>
                <h2>404</h2>
                <h4>Error - Page Not Found</h4>
                <p className='fw-bold'>Please check the URL.</p>
                <p>Otherwise, click the button to be redirected to the homepage.</p>
                <Nav.Link as={Link} active className='fs-5' to="/"> <button className='btn'>Go to home page</button>{' '}</Nav.Link>
            </div>
        </div>
    );
};

export default Erorr;