import React from 'react';
import Carousel, { CarouselItem } from './Carousel';
import Banner from '../Banner/Banner';
import Avatar from '../../../Assets/avatar.png';
import LocationIconRed from '../../../Assets/location-icon.png';
import Quote from '../../../Assets/quote.png';
import WebDesignIcon from '../../../Assets/web-design-icon.png'
import CountUp from 'react-countup'
import Footer from '../Shared/Footer';
import Service from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <section className='max-w-7xl lg:mx-auto md:mx-auto px-5 py-12'>
                <div className='bg-[#F6FAFF] rounded-2xl py-12 px-12'>
                    <div className='lg:flex md:flex grid grid-cols-1 gap-24'>
                        <div className='lg:w-2/5 md:w-2/5 w-full'>
                            <p className='lg:text-lg md:text-base text-sm font-semibold py-2 px-5 inline-block rounded-full text-[#F74F22]' style={{ 'backgroundColor': 'rgba(247, 79, 34, 0.08)' }}>Our Feedbacks</p>
                            <p className='lg:text-4xl md:text-3xl text-2xl font-bold mb-3 text-[#2E3033] my-5'>What they're talking about us</p>
                            <p className='lg:text-lg md:text-lg text-base text-gray-600'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many.</p>
                        </div>
                        <div className='lg:w-3/5 md:w-3/5 w-full'>
                            <Carousel className='whitespace-nowrap'>
                                <CarouselItem>
                                    <div className='w-full p-10 grid grid-cols-1'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <div>
                                                    <img src={Avatar} alt='avatar' className='h-16 w-16 rounded-full border-4 border-[#E4E4E4]' />
                                                </div>
                                                <div>
                                                    <p className='text-lg font-semibold text-[#2E3033]'>Azizur Rahman <span className='text-sm font-semibold text-[#0082C4] ml-1'>Volunteer</span></p>
                                                    <p className='text-sm flex items-center gap-1 text-[#777B84]'><img src={LocationIconRed} alt='location' />Dhaka, Bangladesh</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={Quote} alt='Quote' />
                                            </div>
                                        </div>
                                        <div className='!w-[570px]'>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. <br />There are many variations of passages of Lorem Ipsum available but the majority. <br />Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are<br /> many variations</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className='w-full p-10 grid grid-cols-1'>
                                        <div className=' flex items-center justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <div>
                                                    <img src={Avatar} alt='avatar' className='h-16 w-16 rounded-full border-4 border-[#E4E4E4]' />
                                                </div>
                                                <div>
                                                    <p className='text-lg font-semibold text-[#2E3033]'>Azizur Rahman <span className='text-sm font-semibold text-[#0082C4] ml-1'>Volunteer</span></p>
                                                    <p className='text-sm flex items-center gap-1 text-[#777B84]'><img src={LocationIconRed} alt='location' />Dhaka, Bangladesh</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={Quote} alt='Quote' />
                                            </div>
                                        </div>
                                        <div className='!w-[570px]'>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. <br />There are many variations of passages of Lorem Ipsum available but the majority. <br />Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are<br /> many variations</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className='w-full p-10 grid grid-cols-1'>
                                        <div className=' flex items-center justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <div>
                                                    <img src={Avatar} alt='avatar' className='h-16 w-16 rounded-full border-4 border-[#E4E4E4]' />
                                                </div>
                                                <div>
                                                    <p className='text-lg font-semibold text-[#2E3033]'>Azizur Rahman <span className='text-sm font-semibold text-[#0082C4] ml-1'>Volunteer</span></p>
                                                    <p className='text-sm flex items-center gap-1 text-[#777B84]'><img src={LocationIconRed} alt='location' />Dhaka, Bangladesh</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={Quote} alt='Quote' />
                                            </div>
                                        </div>
                                        <div className='!w-[570px]'>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. <br />There are many variations of passages of Lorem Ipsum available but the majority. <br />Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are<br /> many variations</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#F6FAFF] py-20'>
                <div className='max-w-7xl lg:mx-auto md:mx-auto mx-5'>
                    <div>
                        <p></p>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-12 md:gap-12 gap-5'>
                        <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg grid justify-items-center'>
                            <div className='border-4 border-[#554bcd] h-28 w-28 flex justify-center items-center rounded-full'>
                                <div className='lg:text-3xl md:text-4xl text-3xl text-white font-bold flex items-center justify-center bg-[#554bcd] h-24 w-24 rounded-full'>
                                    <CountUp
                                        start={0}
                                        end={500}
                                        duration={2.75}
                                    />
                                    <span>+</span>
                                </div>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div>
                        <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg grid justify-items-center'>
                            <div className='border-4 border-[#554bcd] h-28 w-28 flex justify-center items-center rounded-full'>
                                <div className='lg:text-3xl md:text-4xl text-3xl text-white font-bold flex items-center justify-center bg-[#554bcd] h-24 w-24 rounded-full'>
                                    <CountUp
                                        start={0}
                                        end={500}
                                        duration={2.75}
                                    />
                                    <span>+</span>
                                </div>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div>
                        <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg grid justify-items-center'>
                            <div className='border-4 border-[#554bcd] h-28 w-28 flex justify-center items-center rounded-full'>
                                <div className='lg:text-3xl md:text-4xl text-3xl text-white font-bold flex items-center justify-center bg-[#554bcd] h-24 w-24 rounded-full'>
                                    <CountUp
                                        start={0}
                                        end={500}
                                        duration={2.75}
                                    />
                                    <span>+</span>
                                </div>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div>
                        <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg grid justify-items-center'>
                            <div className='border-4 border-[#554bcd] h-28 w-28 flex justify-center items-center rounded-full'>
                                <div className='lg:text-3xl md:text-4xl text-3xl text-white font-bold flex items-center justify-center bg-[#554bcd] h-24 w-24 rounded-full'>
                                    <CountUp
                                        start={0}
                                        end={500}
                                        duration={2.75}
                                    />
                                    <span>+</span>
                                </div>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div>
                        {/* <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg'>
                            <div className='lg:text-5xl md:text-4xl text-3xl font-bold flex items-center justify-center'>
                                <CountUp
                                    start={0}
                                    end={500}
                                    duration={2.75}
                                />
                                <span>+</span>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div>
                        <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg'>
                            <div className='lg:text-5xl md:text-4xl text-3xl font-bold flex items-center justify-center'>
                                <CountUp
                                    start={0}
                                    end={500}
                                    duration={2.75}
                                />
                                <span>+</span>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div>
                        <div className='bg-white rounded-lg lg:px-8 md:px-8 px-3 lg:py-7 md:py-7 py-4 border-b-8 border-b-[#4338CA] shadow-lg'>
                            <div className='lg:text-5xl md:text-4xl text-3xl font-bold flex items-center justify-center'>
                                <CountUp
                                    start={0}
                                    end={500}
                                    duration={2.75}
                                />
                                <span>+</span>
                            </div>
                            <p className='text-2xl text-center mt-2'>Projects</p>
                        </div> */}
                    </div>
                </div>
            </section>

            <Service></Service>

            <Footer></Footer>
        </div >
    );
};

export default Home;