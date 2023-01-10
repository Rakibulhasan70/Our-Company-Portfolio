import React from 'react';
import bannerImage from '../../../../src/Assets/hero-img.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-[#37517e]'>
            <div className='grid grid-cols-1 gap-y-3 lg:grid-cols-2 mx-5 lg:mx-14 bg-[#37517e] items-center'>
                <div>
                    <p className='mt-10 text-4xl lg:text-5xl font-bold text-white leading-tight font'>Better Solutions For Your Business</p>
                    <p className=' mt-4 text-xl lg:text-2xl text-[#7991ac] font-medium '>We are team of talented people making your Preference </p>

                    <button className='mt-4 font-medium  text-lg leading-none inline-block bg-[#47b2e4] text-white px-6 pt-2 pb-3 rounded-3xl'>Demo</button>
                </div>
                <div>
                    <img className='' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;