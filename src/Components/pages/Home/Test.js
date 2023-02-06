import React from "react";
import Slider from "react-slick";
import Avatar from '../../../Assets/avatar.png';
import LocationIconRed from '../../../Assets/location-icon.png';
import Quote from '../../../Assets/quote.png';
import './Test.css';

const Test = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='max-w-7xl lg:mx-auto md:mx-auto mx-5 my-20'>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                    <div></div>
                    <div className="">
                        <Slider {...settings} className='rounded-2xl'>
                            <div className="bg-red-200 h-96 !flex justify-center items-center rounded-2xl">
                                <div className="w-full p-10 grid grid-cols-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <img
                                                    src={Avatar}
                                                    alt="avatar"
                                                    className="h-16 w-16 rounded-full border-4 border-[#E4E4E4]"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold text-[#2E3033]">
                                                    Azizur Rahman{" "}
                                                    <span className="text-sm font-semibold text-[#0082C4] ml-1">
                                                        Volunteer
                                                    </span>
                                                </p>
                                                <p className="text-sm flex items-center gap-1 text-[#777B84]">
                                                    <img src={LocationIconRed} alt="location" />
                                                    Dhaka, Bangladesh
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Quote} alt="Quote" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                                                exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority. Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-red-200 h-96 !flex justify-center items-center">
                                <p className="text-base text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio commodi, debitis dolore voluptatibus necessitatibus excepturi illo ab quos, facilis magnam rerum impedit culpa. Quam impedit nisi minus recusandae ipsa.</p>
                            </div>
                            <div className="bg-red-200 h-96 !flex justify-center items-center">
                                <p className="text-base text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio commodi, debitis dolore voluptatibus necessitatibus excepturi illo ab quos, facilis magnam rerum impedit culpa. Quam impedit nisi minus recusandae ipsa.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;