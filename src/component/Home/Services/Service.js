import React from 'react';
import { Flip } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, description, price } = service;
    return (
        <div className='col mb-4'>
            <Flip left>
                <div id='product' className='card h-100  rouded'>
                    <div className='card-body pb-5'>
                        <img src={img} className='img-fluid' alt="" />
                        <h2 className=' fw-bold pt-5 '>{name}</h2>
                        <h1 className=' fw-bold'>${price}<small>/WEEK</small></h1>
                        <p className='pt-3'>{description}</p>
                        <div className='text-center'>
                            <Link to='/checkout' className='btn checkout rounded-pill pt-2 pb-2 ps-4 pe-4'>CHECK OUT</Link>
                        </div>
                    </div>
                </div>

            </Flip>
        </div>
    );
};

export default Service;