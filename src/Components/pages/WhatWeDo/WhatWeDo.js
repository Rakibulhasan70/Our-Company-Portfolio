import React from 'react'
import './WhatWeDo.css'
import { FaReact,FaNodeJs } from 'react-icons/fa';
import { SiExpress,SiMongodb } from 'react-icons/si';
import whatWeDo from '../../../Assets/home-img/what-we-do.png'

const WhatWeDo =() =>{
    return(
        <section className='what-we-do-bg mt-[70px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center items-center mx-5 md:mx-9'>
        <div>
            <h2 className='text-white text-5xl font-bold py-6'>What We Actually Do</h2>
            <div className='flex md:gap-5 mb-5 mt-3'>
                <div className='tech-icon-container'>
                    <FaReact className='tech-icon'></FaReact>
                </div>
                <div className='tech-icon-container'>
                    <FaNodeJs className='tech-icon'></FaNodeJs>
                </div>
                <div className='tech-icon-container'>
                    <SiExpress className='tech-icon'></SiExpress>
                </div>
                <div className='tech-icon-container'>
                    <SiMongodb className='tech-icon'></SiMongodb>
                </div>
            </div>
            <h4 className='text-white text-2xl font-bold py-2'>MERN Website Development Services</h4>
            <p className='text-white'>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
            <button className='bg-[#43BAFF] hover:bg-[#7141B1] transition-all py-3 px-6 rounded-md text-white mt-8'>CONTACT US</button>
        </div>
        <div className='mt-5'>
            <img src={whatWeDo}></img>
        </div>
        </div>
        </section>
    );
};

export default WhatWeDo;