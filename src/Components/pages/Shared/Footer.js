import React from 'react';
import FooterBg from '../../../Assets/footer-bg.png';
// import WhiteLogo from '../../Assets/white-logo.png';
import LocationIconYellow from '../../../Assets/location-icon-yellow.png';
import CallIconYellow from '../../../Assets/call-icon-yellow.png';
import EmailIconYellow from '../../../Assets/email-icon-yellow.png';
import FacebookLogo from '../../../Assets/facebook-icon.png';
import LinkedinLogo from '../../../Assets/linkedin-icon.png';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div>
                <div className='bg-[#09446F] lg:px-12 md:px-12 px-5 lg:py-8 md:py-10 py-5'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-between bg-[#09446F]'>
                            <div>
                                <p className='lg:text-lg md:text-lg text-sm font-semibold py-1 lg:px-5 md:px-5 px-2 rounded-full lg:w-36 md:w-36 w-28 text-center text-[#E3E6EA] bg-[#07507F]'>Newsletter</p>
                                <p className='text-[#F6FAFF] lg:text-3xl md:text-3xl text-2xl font-bold w-5/6'>To get news, <span className='text-[#FDBE44]'>Subscribe</span> to our newsletter.</p>
                            </div>
                            <div>
                                <form className='flex gap-2 items-center'>
                                    <div className='bg-white rounded-xl py-2 px-2 lg:mt-0 md:mt-0 mt-5'>
                                        <input type='email' placeholder='Email address' className='bg-white lg:text-lg md:text-lg text-sm px-5 lg:py-2 md:py-2 py-2 rounded-l-xl lg:w-96 md:w-96 w-52 border-none focus:outline-none' />
                                        <input type='submit' value='Subscribe' className='lg:px-10 md:px-10 px-3 lg:py-2 md:py-2 py-2 bg-[#FDBE44] text-[#09446E] font-bold lg:text-xl md:text-xl text-base cursor-pointer rounded-xl' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "backgroundImage": `url(${FooterBg})` }}>
                <div className='max-w-7xl lg:mx-auto md:mx-auto mx-5 pt-20'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-20 gap-5 pb-12 FooterListBorder2'>
                        <div className='grid grid-cols-1 gap-8'>
                            {/* <img src={WhiteLogo} alt='White Logo' className='lg:w-44 md:w-44 w-36' /> */}
                            <p className='text-base text-[#E3E6EA]'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages</p>
                            <div className='grid grid-cols-1 gap-2'>
                                <p className='bg-[#003A65] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={CallIconYellow} alt='' />+880125 455785 55</p>
                                <p className='bg-[#003A65] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={EmailIconYellow} alt='' />hello@gmail.com</p>
                                <p className='bg-[#003A65] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={LocationIconYellow} alt='' />Company address, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Our Work</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>About Us</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Vision and Values</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Meet the Team</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Collaboration</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Publications</Link>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Learn</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Become a mentor</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Community Members</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Become a Partner</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Mentor Hub</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Partner Hub</Link>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Support</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Help & FAQ</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Events</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Contact us</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Terms of service</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Live Chat</Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex grid grid-cols-1 justify-between items-center py-6'>
                        <div>
                            <p className='text-[#E3E6EA] text-base'>© 2022 Copyrights by <span className='text-[#F74F22] font-semibold'>Optimus Technologies.</span> All Rights Reserved.</p>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <Link to=''><img src={FacebookLogo} alt='Facebook logo' className='bg-[#003A65] rounded-md px-4 py-4' /></Link>
                            <Link to=''><img src={LinkedinLogo} alt='Facebook logo' className='bg-[#003A65] rounded-md px-4 py-4' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='relative' style={{ "backgroundImage": `url(${FooterBg})` }}>
                <div className='max-w-7xl mx-auto'>
                    <div className='bg-[#09446F] rounded-2xl lg:px-12 md:px-12 px-5 lg:py-10 md:py-10 py-5 mx-3 absolute lg:-top-24 md:-top-24 -top-20'>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-between bg-[#09446F]'>
                            <div>
                                <p className='lg:text-lg md:text-lg text-sm font-semibold py-1 lg:px-5 md:px-5 px-2 rounded-full lg:w-36 md:w-36 w-28 text-center text-[#E3E6EA] bg-[#07507F]'>Newsletter</p>
                                <p className='text-[#F6FAFF] lg:text-3xl md:text-3xl text-2xl font-bold w-5/6'>To get news, <span className='text-[#FDBE44]'>Subscribe</span> to our newsletter.</p>
                            </div>
                            <div>
                                <form className='flex gap-2 items-center'>
                                    <input type='email' placeholder='Email address' className='bg-white lg:text-lg md:text-lg text-sm px-5 lg:py-4 md:py-4 py-2 rounded-xl lg:w-96 md:w-96 w-48 border-none focus:outline-none' />
                                    <input type='submit' value='Subscribe' className='lg:px-10 md:px-10 px-3 lg:py-4 md:py-4 py-2 bg-[#FDBE44] text-[#09446E] font-bold lg:text-xl md:text-xl text-base cursor-pointer rounded-xl' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-7xl lg:mx-auto md:mx-auto mx-5 pt-40'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-20 gap-5 pb-12 FooterListBorder2'>
                        <div className='grid grid-cols-1 gap-8'>
                            <p className='text-base text-[#E3E6EA]'>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages</p>
                            <div className='grid grid-cols-1 gap-2'>
                                <p className='bg-[#003A65] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={CallIconYellow} alt='' />+880125 455785 55</p>
                                <p className='bg-[#003A65] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={EmailIconYellow} alt='' />hello@gmail.com</p>
                                <p className='bg-[#003A65] px-5 py-4 flex items-center gap-3 text-[#F6FAFF] text-sm font-semibold rounded-md w-64'><img src={LocationIconYellow} alt='' />Company address, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Our Work</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>About Us</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Vision and Values</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Meet the Team</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Collaboration</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Publications</Link>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Learn</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Become a mentor</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Community Members</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Become a Partner</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Mentor Hub</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Partner Hub</Link>
                            </div>
                        </div>
                        <div>
                            <p className='FooterListBorder text-2xl text-white font-bold pb-2'>Support</p>
                            <div className='py-5 grid grid-cols-1 gap-3'>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Help & FAQ</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Events</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Contact us</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Terms of service</Link>
                                <Link to='' className='text-base font-semibold text-[#E3E6EA]'>Live Chat</Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex md:flex grid grid-cols-1 justify-between items-center py-6'>
                        <div>
                            <p className='text-[#E3E6EA] text-base'>© 2022 Copyrights by <span className='text-[#F74F22] font-semibold'>Optimus Technologies.</span> All Rights Reserved.</p>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <Link to=''><img src={FacebookLogo} alt='Facebook logo' className='bg-[#003A65] rounded-md px-4 py-4' /></Link>
                            <Link to=''><img src={LinkedinLogo} alt='Facebook logo' className='bg-[#003A65] rounded-md px-4 py-4' /></Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Footer