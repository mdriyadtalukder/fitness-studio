import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import './Home.css'
import Result from './Result/Result';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='container'>
                <h1 className='text-center pt-5 pb-4 fw-bold'>IT'S TIME TO PUT YOURSELF FIRST</h1>
                <div className='w-75 mx-auto fs-5'>
                    <small> We work with men and women that have let fitness slide down their list of priorities, and want to make a change</small><br /><br />

                    <small>  Using our Armoury Transformation Formula, we'll guide you through our proven system of creating a healthier, happier and more confident version of yourself in the next 6 weeks- without boring workouts, or fad diets</small><br /><br />

                    <small>   We believe fitness should enhance your life, rather than take away from it- every Armoury Transformation starts with an in-depth look at where you currently are, and creates an achievable path to where you want to be.</small><br /><br />

                    <small> Whether that's ditching the mid-afternoon energy slump so you can be active with your kids after school, banishing the expanding midsection that's making it harder to slide into your work trousers each passing year, or finally having the body confidence to buy clothes that show off your physique, rather than hide it</small><br /><br />

                    <small>  In just 42 days we'll take you from feeling frustrated with your current trajectory, to feeling proud of the positive habits you've built</small>
                </div>
                <div className='text-center'>
                    <Link to='/aboutus' className='btn  aboutus rounded-pill pt-2 pb-2 ps-4 pe-4'>ABOUT US</Link>

                </div>
            </section>
            <Services></Services>
            <Result></Result>
            <Footer></Footer>

        </div>
    );
};

export default Home;