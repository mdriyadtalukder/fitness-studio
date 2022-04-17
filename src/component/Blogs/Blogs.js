import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>

            <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                <div className='col mb-4'>
                    <div className='card h-100 shadow rouded'>
                        <div className='card-body pb-5'>
                            <img src='' className='img-fluid' alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;