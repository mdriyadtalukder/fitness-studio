import React from 'react';

const Service = ({ service }) => {
    const { img, name, description, price } = service;
    return (
        <div className='col mb-4'>
            <div className='card h-100 shadow rouded'>
                <div className='card-body'>
                    <img src={img} className='img-fluid' alt="" />
                    <h2 className=' fw-bold pt-3 '>{name}</h2>
                    <h1 className=' fw-bold'>${price}<small>/WEEK</small></h1>
                    <p className='pt-3'>{description}</p>
                    <div className='text-center'>
                        <button className='btn fw-bold shadow-lg' style={{ backgroundColor: '#1CB0E6' }}>Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;