import React from 'react';
import { Flip, Slide } from 'react-reveal';
import img from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'

const Result = () => {
    return (
        <div className='container'>
            <Slide left>
                <h1 className='text-center mt-5 pt-4 pb-3 fw-bold'>GETTING RESULTS SINCE 2015</h1>
                <p>The Armoury would be nothing without the men and women that have put their trust in us over the last 10 years, and working together we've had the privilege of seeing some truly tremendous accomplishments.  Whether that means gaining the confidence to wear a two-piece at the beach after having their first child, fitting into the suit they always imagined they'd wear for their daughters wedding, or the everyday confidence that permeates everything they do, installed through the effort they've put in at the studio. </p>
            </Slide>
            <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                <div className='col mb-4'>
                    <Flip left>
                        <div id='product' className='card h-100 rouded'>
                            <div className='card-body pb-5'>
                                <img src={img} className='img-fluid' style={{ height: '450px' }} alt="" />
                                <p className='pt-5'>" Working from home meant my body felt stiffer, my energy plummeted and my motivation to train was non-existent.I've got my energy back, and have ended up with a physique better than even when I was in my 20s! "</p>
                                <p className='pt-3 fw-bold'>- Dave Wood</p>
                            </div>
                        </div>
                    </Flip>
                </div>
                <div className='col mb-4'>
                    <Flip left>
                        <div id='product' className='card h-100  rouded'>
                            <div className='card-body pb-5'>
                                <img src={img2} className='img-fluid' style={{ height: '450px' }} alt="" />
                                <p className='pt-5'>" I love our training and never get bored, it helps me balance my busy life as a mum and gives me the time to focus on myself. Best decision I ever made was booking my first session at The Armoury! "</p>
                                <p className='pt-3 fw-bold'>- John Devid</p>
                            </div>
                        </div>
                    </Flip>
                </div>
            </div>
        </div>
    );
};

export default Result;