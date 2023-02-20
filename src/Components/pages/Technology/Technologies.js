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

    var settings = {

        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 1000,

        cssEase: "linear",
        responsive: [
            {
                breakpoint: 576,
                settings: {

                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 5000,
                    autoplaySpeed: 1000,
                    cssEase: "linear",
                }

            }
        ]

    };


    return (
      <div>
        <div>
          <div className="my-12">
            <h1 className="text-black lg:text-4xl md:text-3xl text-2xl font-bold text-center">
              Let's Build Something
            </h1>
            <div className="flex items-center justify-center my-5">
              <div className="decor-left">
                <span></span>
              </div>
              <p className="text-[#A370F0] text-sm font-bold px-4 uppercase -mt-2">
                Quick Contact
              </p>
              <div className="decor-right">
                <span></span>
              </div>
            </div>
          </div>
          <Slider {...settings} className="py-12 ">
            <div class="flexs">
              <div class="containers ">
                <div class="hexa">
                  <img className="pt-9 w-16 mx-auto" src={reactIcone} alt="" />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers ">
                <div class="hexa">
                  <img
                    className="pt-9 w-16 mx-auto"
                    src={angularIcone}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers ">
                <div class="hexa">
                  <img className="pt-9 w-16 mx-auto" src={phpIcone} alt="" />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers">
                <div class="hexa">
                  <img className="pt-9 w-16 mx-auto" src={awsIcone} alt="" />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers">
                <div class="hexa">
                  <img className="pt-9 w-16 mx-auto" src={vueIcone} alt="" />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers">
                <div class="hexa">
                  <img className="pt-9 w-48   mx-auto" src={nodeIcone} alt="" />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers ">
                <div class="hexa">
                  <img
                    className="pt-9 w-16 mx-auto"
                    src={mongodbIcone}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="flexs ">
              <div class="containers ">
                <div class="hexa">
                  <img className="pt-9 w-16 mx-auto" src={nextIcone} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
};

export default Technologies;