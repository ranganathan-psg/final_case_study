import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../images/carousel_1.jpg';
import c2 from '../images/carousel_2.jpg';
import c3 from '../images/carousel_3.jpg';
import { Link } from 'react-router-dom';

class Homepage extends Component {


    render() {

        return (
            <div className='homeComponent'>
                {/* home page carousal */}
                <Carousel>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={c1}
                            alt="First slide"
                            height={400}
                        />
                        <Carousel.Caption>
                            <h3 className='black-clr'>Make Your Dream Possible</h3>
                            <p className='black-clr'>You can find your job here which is suitable for you</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={c2}
                            height={400}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='black-clr'>Advance your career with MyJobGator</h3>
                            <p className='black-clr'>Create a free account, complete your profile, and get matched with your dream job.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={c3}
                            height={400}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='black-clr'>Upload your resume</h3>
                            <p className='black-clr'>
                                Find the job that is
                                perfect for You.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='home-option'>
                    <div className='col'>
                        {/* <div className="parellogram margin-left-120   ">
                            <div>
                                JOBS
                            </div>
                    </div> */}
                        <Link to="/jobs" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="banner-w ">
                                <div className="banner">Jobs</div>
                            </div>
                        </Link>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="banner-w">
                                <div className="banner">ContactUs</div>
                            </div>
                        </Link>

                        <div className="banner-w">
                            <div className="banner">Coming Soon...</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Homepage;
