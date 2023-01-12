import React from 'react';
import Carousel, { CarouselItem } from './Carousel';

const Home = () => {
    return (
        <div>
            <h1 className='text-5xl  mt-11'>home</h1>
            <section className='max-w-7xl lg:mx-auto md:mx-auto px-5 py-12'>
                <div className='bg-[#F6FAFF] rounded-2xl py-12 px-12'>
                    <div className='flex gap-24'>
                        <div className='w-2/5'>
                            <p className='lg:text-lg md:text-base text-sm font-semibold py-2 px-5 inline-block rounded-full text-[#F74F22]' style={{ 'backgroundColor': 'rgba(247, 79, 34, 0.08)' }}>Our Feedbacks</p>
                            <p className='lg:text-4xl md:text-3xl text-2xl font-bold mb-3 text-[#2E3033] my-5'>What they're talking about us</p>
                            <p className='lg:text-lg md:text-lg text-base text-gray-600'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many.</p>
                        </div>
                        <div className='w-3/5'>
                            <Carousel>
                                <CarouselItem>
                                    {/* <div className='w-full p-10 grid grid-cols-1'>
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
                                        <div className='inline-block'>
                                            <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority. Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations</p>
                                        </div>
                                    </div> */}
                                    Item 1
                                </CarouselItem>
                                <CarouselItem>Item 2</CarouselItem>
                                <CarouselItem>Item 3</CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;