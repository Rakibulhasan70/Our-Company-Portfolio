import React from 'react';
import './Technologies.css'
import reactIcone from '../../../Assets/React-icon.svg.png'
import angularIcone from '../../../Assets/angular.png'
import phpIcone from '../../../Assets/php.png'
import awsIcone from '../../../Assets/aws.png'
import vueIcone from '../../../Assets/vuejs-removebg-preview.png'
import nextIcone from '../../../Assets/next-removebg-preview.png'
import nodeIcone from '../../../Assets/nodejs-removebg-preview.png'
import mongodbIcone from '../../../Assets/mongodb-removebg-preview.png'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Technologies = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };


    return (
        <div>
            <div >
                <div className='text-2xl font-semibold text-center font-mono bg-[#eff4fa] w-[50%] lg:w-[20%] mx-auto py-2 mt-10'>
                    <h2 >Technologiess</h2>
                </div>


                <Slider {...settings} className="py-12">
                    <div class="flexs">
                        <div class="containers">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={reactIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs ">
                        <div class="containers">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={angularIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs ">
                        <div class="containers">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={phpIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs">
                        <div class="containers">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={awsIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs ">
                        <div class="containers">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={vueIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs ">
                        <div class="containers">
                            <div class="hexa">
                                <img className='pt-9 w-48   mx-auto' src={nodeIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs ">
                        <div class="containers ">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={mongodbIcone} alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="flexs ">
                        <div class="containers ">
                            <div class="hexa">
                                <img className='pt-9 w-16 mx-auto' src={nextIcone} alt="" />

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Technologies;