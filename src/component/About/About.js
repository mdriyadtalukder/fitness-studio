import React from 'react';
import img from '../../images/riyad2.png'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div id='row' className='row w-50 mx-auto row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                <div className='col mb-4'>
                    <div id='card' className='card h-100 shadow rouded'>
                        <div className='card-body pb-5'>

                            <div className="center">
                                <img src={img} className='img-fluid' alt="" />
                            </div>
                            <div className="text-center pt-3">
                                <h5> Name: Md Riyad Talukder</h5>
                                <h5>Email: mdriyadtalukder69@gmail.com</h5>
                            </div>
                            <div className="text-center">
                                <h4 className='fw-bold pt-2'>My Goal</h4>
                                <p>As a Web developer, Js. my primary focus will be on developing user interface components and implementing them following well-known React. js workflows (such as Flux or Redux). I will ensure that these components and the overall application are robust and easy to maintain.And also I want to be able to design Web pages that can effectively display material, provide interactivity, and be artistically pleasing to the user. In order to do this,I need to know the nuances of Web design and delivery and the various tools and software applications i can use.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;