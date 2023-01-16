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

const Technologies = () => {
    return (
        <div>
            <div>
                <div className='text-2xl font-semibold text-center font-mono bg-[#eff4fa] w-[50%] lg:w-[20%] mx-auto py-2 mt-10'>
                    <h2 >Technologies</h2>
                </div>


                <div class="sliders">
                    <div class="slide-track ">

                        {/* <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10  hover:border-b-4 hover:border-b-[#2596be] ">
                        <img className='w-20 hover:w-24' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div> */}


                        {/* /////// */}

                        <div class="flexs px-10">
                            <div class="containers">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={reactIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs pl-6 pr-10">
                            <div class="containers">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={angularIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs pl-4 pr-4 ">
                            <div class="containers">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={phpIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs px-10">
                            <div class="containers">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={awsIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs pl-4 pr-4">
                            <div class="containers">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={vueIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs px-10">
                            <div class="containers">
                                <div class="hexa">
                                    <img className='pt-9 w-48   mx-auto' src={nodeIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs pl-4 ">
                            <div class="containers ">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={mongodbIcone} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="flexs pl-14 ">
                            <div class="containers ">
                                <div class="hexa">
                                    <img className='pt-9 w-16 mx-auto' src={nextIcone} alt="" />

                                </div>
                            </div>
                        </div>


                        {/* ///////////// */}

                        {/* <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10 ">
                        <img className='w-16' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div>
                    <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10 ">
                        <img className='w-16' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div>
                    <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10 ">
                        <img className='w-16' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div>
                    <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10 ">
                        <img className='w-16' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div>
                    <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10 ">
                        <img className='w-16' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div>
                    <div class="slide mx-5 shadow-xl rounded-md pl-10 py-10 ">
                        <img className='w-16' src={reactIcone} alt="" />
                        <h2 className='text-xl font-serif mt-4 pl-2'>React</h2>
                    </div> */}

                        {/* <div class="slide mx-5">h</div>
                    <div class="slide mx-5">cdgh</div>
                    <div class="slide mx-5">dh</div>
                    <div class="slide mx-5">ghj</div>
                    <div class="slide mx-5">ert</div>
                    <div class="slide mx-5">st</div> */}
                        {/* <div class="slide mx-5">h</div>
                    <div class="slide mx-5">h</div>
                    <div class="slide mx-5">t </div>
                    <div class="slide mx-5">j</div>
                    <div class="slide mx-5">r</div>
                    <div class="slide mx-5">as</div>
                    <div class="slide mx-5">dfh</div>
                    <div class="slide mx-5">ghk</div>
                    <div class="slide mx-5">rtu</div>
                    <div class="slide mx-5">k</div>
                    <div class="slide mx-5">we</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;