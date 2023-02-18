import React from 'react';
import { Link } from 'react-router-dom';
import hour from '../../../Assets/hours.png'
import activites from '../../../Assets/activity.png'
import worker from '../../../Assets/worker.png'
import grouth from '../../../Assets/growth.png'
import './Aboutus.css'
import TQM from '../../../Assets/about-img/Total_Quality.jpg'


const AboutUS = () => {
  return (
    <div>
      <div>
        <section class="flex flex-col lg:flex-row w-full h-full container m-auto items-center ">
          <div class="flex flex-col  px-8 lg:w-1/2 h-full lg:p-10 lg:pl-6 xl:px-20 xl:py-24 ">
            <div class="bioNameTitle flex flex-col  border-b-4 border-gray-300  ">
              <h1 class="text-6xl font-bold">About Us</h1>
              <h3 class="text-2xl uppercase mt-5 pb-2">
                Every kind of web & softweare solution.
              </h3>
            </div>
            <p class="text-xl mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <button class="continue-application mt-10">
                <div>
                  <div class="pencil"></div>
                  <div class="folder">
                    <div class="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div class="paper"></div>
                  </div>
                </div>
                <a className='text-white' href="https://calendly.com/niharmonirulislam/project-idea?month=2023-01">
                  {" "}
                  Start a project with us
                </a>
              </button>
            </div>
          </div>
          <div class="  lg:w-1/2 h-full lg:p-10 lg:pr-6 xl:p-24">
            <div class=" flex items-center justify-center ">
              <div
                class="rounded-lg shadow-xl bg-gray-900 text-white"
                style={{ width: "370px", height: "250px" }}
              >
                <div class="border-b border-gray-800 px-8 py-3">
                  <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                  <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                  <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                </div>
                <div class="px-8 py-6">
                  <p>
                    <em class="text-blue-400">const</em>{" "}
                    <span class="text-green-400">aboutUs</span>{" "}
                    <span class="text-pink-500">=</span>{" "}
                    <em class="text-blue-400">function</em>(){" "}
                  </p>
                  <p>
                    &nbsp;&nbsp;<span class="text-pink-500">return</span>{" "}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                    <span class="text-yellow-300">'Company Name'</span>,
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Services:{" "}
                    <span class="text-yellow-300">
                      'fullstack-web-development'
                    </span>
                    ,
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
                    <span class="text-yellow-300">
                      '
                      <a
                        href="https://scottwindon.com"
                        target="_blank"
                        class="text-yellow-300 hover:underline focus:border-none"
                      >
                        https://comapanyName.com
                      </a>
                      '
                    </span>
                    ,
                  </p>
                  <p>&nbsp;&nbsp;</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 flex items-center mt-10">
              <div class="mb-4">
                <img
                  src="https://www.aimbrill.com/images/portfolio/Inani/1.png"
                  class="max-w-full h-auto rounded-lg"
                  alt=""
                />
              </div>

              <div class="mb-4">
                <img
                  src="https://www.aimbrill.com/images/portfolio/Toolsvilla/10.png"
                  class="max-w-full h-auto rounded-full"
                  alt=""
                />
              </div>
              <div class="mb-4">
                <img
                  src="https://www.aimbrill.com/images/portfolio/Pluc%20Tv%20-%20India's%20Premium%20Creator%20Economy%20Platform/12.png"
                  class="max-w-full h-auto rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className=" text-center flex justify-center items-center">
        <div className="title">
          <span>We Inspire You to Come Up with Your Best</span>
        </div>
      </div>
      <div className="flex items-center justify-center my-5">
            <div className="decor-left">
              <span></span>
            </div>
            <p className="text-[#131313] text-sm font-bold px-4 uppercase -mt-2">Quick Contact</p>
            <div className="decor-right">
              <span></span>
            </div>
          </div>
      <div className="max-w-7xl lg:mx-auto md:mx-auto mx-5 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 mb-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 grid-cols-1 mt-16 ">
          <div className="">
            <h1 className="text-4xl  ml-6 mb-3">Flexible working hours</h1>
            <div className="flex">
              <img className="w-16 h-16 rounded" src={hour} alt="" />
              <h1 className="text-xl ml-6">
                {" "}
                We’re a work-oriented and result-driven IT company. Though
                work is our priority, we provide flexible working hours to
                help you reduce stress
              </h1>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl  mb-3">Company Activities</h1>
            <div className="flex">
              {/* <h1 className="text-4xl  ml-6 mb-3">Flexible working hours</h1> */}
              <img className="w-16 h-16 rounded" src={activites} alt="" />
              {/* <IoArrowRedoSharp className="w-12 h-12 text-cyan-500" /> */}
              <h1 className="text-xl ml-6">
                {" "}
                We’re a work-oriented and result-driven IT company. Though
                work is our priority, we provide flexible working hours to
                help you reduce stress
              </h1>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl  ml-6 mb-3">Growth Opportunity</h1>
            <div className="flex">
              <img className="w-16 h-16 rounded" src={grouth} alt="" />
              {/* <IoArrowRedoSharp className="w-12 h-12 text-cyan-500" /> */}
              <h1 className="text-xl ml-6">
                {" "}
                We’re a work-oriented and result-driven IT company. Though
                work is our priority, we provide flexible working hours to
                help you reduce stress
              </h1>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl  ml-6 mb-3">Awesome Co-Workers</h1>
            <div className="flex">
              {/* <IoArrowRedoSharp className="w-12 h-12 text-cyan-500" /> */}
              <img className="w-16 h-16 rounded" src={worker} alt="" />
              <h1 className="text-xl ml-6">
                {" "}
                We’re a work-oriented and result-driven IT company. Though
                work is our priority, we provide flexible working hours to
                help you reduce stress
              </h1>
            </div>
          </div>
        </div>

      </div>
      <section class="relative z-20 overflow-hidden bg-white ">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[520px] text-center lg:mb-10">

                <div className="faq-title text-6xl">
                  <span className="faq font-bold ">
                    Any Questions? Look Here
                  </span>
                </div>

                <p class="text-base font-semibold text-body-color">
                  There are many variations of passages of Lorem Ipsum
                  available but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-7'>
              <div className='mx-5'>
                <h2 className='text-3xl md:text-4xl font-bold text-[#43BAFF] my-5'>Why You Choose us ?</h2>
                <p className='text-justify leading-7 text-xl font-sans'> <span className='font-bold'>Softonixt</span> works in several IT sectors with skilled expert workforce. We possess the experience and expertise to help web entrepreneurs reach their customers across the digital space. We believe that hard work and honesty can do many effective things and with a great team members we have started working on it and prepared a perfect workforce for you.
                Our young and experienced professionals are here to provide utmost return on your investment in shortest possible time with their talent and proficiency. You are welcome.</p>
              </div>
              <div class="md:ml-9 mx-5">
                <div class="grid divide-y divide-neutral-200 max-w-xl">
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> Can I try this platform for free?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        We offers a free trial of its  platform for a limited time. During the trial period,
                        you will have access to a limited set of features and functionality, but you will not be charged.
                      </p>
                    </details>
                  </div>
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> How do I access   documentation?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Documentation is available on the company's website and can be accessed by
                        logging in to your account. The documentation provides detailed information on how to use the ,
                        as well as code examples and other resources.
                      </p>
                    </details>
                  </div>
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> How do I contact support?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        If you need help with the platform or have any other questions, you can contact the
                        company's support team by submitting a support request through the website or by emailing
                        support@We.com.
                      </p>
                    </details>
                  </div>
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> Do you offer any discounts or promotions?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        We may offer discounts or promotions from time to time. To stay up-to-date on the latest
                        deals and special offers, you can sign up for the company's newsletter or follow it on social media.
                      </p>
                    </details>
                  </div>
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> How do we compare to other similarssss services?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        This platform is a highly reliable and feature-rich service that offers a wide range
                        of tools and functionality. It is competitively priced and offers a variety of billing options to
                        suit different needs and budgets.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="question-bg mb-10 max-w-7xl lg:mx-auto md:mx-auto mx-5 bottom-bar  py-8 px-7 rounded-2xl flex flex-col gap-[10px] text-center items-center justify-center">
          <span class="text-2xl text-white">Still have questions?</span>
          <p class="text-gray-200">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button class="py-3 px-7 w-fit shadow-lg text-white rounded-lg bg-[#43BAFF] hover:bg-[#7141B1] transition-all">
            <Link to="contactUs">Get in touch</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;