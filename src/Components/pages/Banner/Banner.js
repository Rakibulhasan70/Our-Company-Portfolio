import React from 'react';
import TypeWriterEffect from "react-typewriter-effect";
import './Banner.css'
import { FaPlay } from 'react-icons/fa';
import VideoModal from '../Shared/VideoModal';
import { useState } from 'react';

const Banner = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div className="bg-banner-home">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 flex justify-center items-center">
            <div>
              <h1 className='my-3 text-5xl text-white font-bold'>Digital IT Solutions</h1>
              <TypeWriterEffect
                className="text-5xl text-white"
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#A370F0",
                  fontWeight: 900,
                  fontSize: "2em",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                  "We provide Web Design",
                  "We provide Grapics Design",
                  "We provide Bug Fixing",
                  "We provide web Development",
                ]}
                multiTextDelay={1000}
                typeSpeed={90}
              />
              <p className='text-xl text-white py-2'>
                We believe in serving excellence and Value return to our
                clients by using new-age technologies to provide seamless
                services and dependable deliveries.
              </p>
              <div className='video-box'>
                <div onClick={() => setOpen(true)} className='play-btn'>
                  <FaPlay></FaPlay>
                </div>
                <span> VIDEO SHOWCASE</span>
              </div>
              <VideoModal isOpen={isOpen} setOpen={setOpen}></VideoModal>
            </div>

            <div className=''>
              <img
                className='rounded-lg border border-white'
                src="https://cdn.dribbble.com/users/1814344/screenshots/11954759/media/567476f9c2e4151e52edd69845c61fb1.png?compress=1&resize=768x576&vertical=top"
                alt=".."
              />
            </div>
          </div>
        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-[100px] mt-[-65px]'>
        <div className='bg-gradient-to-r from-[#2F2572] to-[#6E3FAE] h-[130px] hover:mt-[-10px] transition-all shadow-2xl'>
          <p>hijuhug gf fgd fgdf df</p>
        </div>
        <div className='bg-gradient-to-r from-[#6E3FAE] to-[#06D3F7] h-[130px] hover:mt-[-10px] transition-all shadow-2xl'>
          <p>hijuhug gf fgd fgdf df</p>
        </div>
        <div className='bg-gradient-to-r from-[#06DAFF] to-[#337ab7] h-[130px] hover:mt-[-10px] transition-all shadow-2xl'>
          <p className='text-white'>hijuhug gf fgd fgdf df</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;