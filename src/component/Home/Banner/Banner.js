import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import logo1 from '../../../images/image-1.jpg'
import logo2 from '../../../images/image-2.jpg'
import logo3 from '../../../images/image-3.jpg'
import '../Services/Service.css'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Zoom>
                        <h3 className='fw-bold head ' style={{ color: '#1CB0E6' }}>PERSONAL TRAINING IN DHAKA</h3>
                        <p className='pb-lg-5  para mb-lg-5 fw-bold'>We're a private personal training studio in dhaka who help busy men & women stop "trying to get in shape", and finally achieve a health & body transformation they won’t rebound from…</p>
                    </Zoom>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Zoom>
                        <h3 className='fw-bold  head' style={{ color: '#1CB0E6' }}>SMALL GROUP PERSONAL TRAINING</h3>
                        <p className='pb-lg-5  para mb-lg-5 f-bold' >The Armoury's Small Group Personal Training helps Dhaka's busy men and women get in the best shape of their life, fall in love with training.</p>
                    </Zoom>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Zoom>
                        <h3 className='fw-bold  head' style={{ color: '#1CB0E6' }}>ONE ON ONE PERSONAL TRAINING</h3>
                        <p className='pb-lg-5 para mb-lg-5 fw-bold' >The Armoury’s One To One Personal Training helps busy men and women to build lean, athletic, healthy physiques without the frustrations, rigidity & ‘bounce-back’.</p>
                    </Zoom>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;