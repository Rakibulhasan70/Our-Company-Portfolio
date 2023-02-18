import React, { useState } from "react";
import "./Contactus.css";
import contact_img from "../../../Assets/Business team work.png";

import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import useTitle from "../../../hooks/useTitle";

const ContactUs = () => {
  const [value, setValue] = useState();
  useTitle("Contact Us")
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <section className="max-w-7xl lg:mx-auto md:mx-5 mx-5">
        <div className="my-12">
          <h1 className="text-[#131313] lg:text-4xl md:text-3xl text-2xl font-bold text-center">CONTACT US</h1>
          <div className="flex items-center justify-center my-5">
            <div className="decor-left">
              <span></span>
            </div>
            <p className="text-[#131313] text-sm font-bold px-4 uppercase -mt-2">Quick Contact</p>
            <div className="decor-right">
              <span></span>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-base text-[#848484] text-center lg:w-1/2 md:w-3/4 w-full">We are looking forward to work with you. Please contact us to discuss more about your preferred service. Don't miss out.</p>
          </div>
        </div>
        <div className="lg:flex md:flex grid grid-cols-1 items-center mb-12">
          <div className="lg:w-[30%] md:w-[30%] w-full py-24 lg:px-0 md:px-2 px-0 bg-[#131313] lg:rounded-l-md md:rounded-l-md rounded-l-none">
            <p className="text-white text-xl text-center">Affordable Pricing</p>
            <p className="text-[#FFA500] text-xl text-center">Lorem Ipsum is simply dummy</p>
          </div>
          <div className="lg:w-[40%] md:w-[40%] w-full lg:py-12 md:py-8 py-12 bg-[#FFA500] lg:rounded-md md:rounded-md rounded-none">
            <h2 className="text-xl text-center font-bold">COMPANY NAME</h2>
            <div className="lg:px-8 md:px-4 px-8">
              <div className="flex lg:gap-8 md:gap-4 gap-6 items-center border-b-[1px] border-b-[#737373] py-3">
                <p className="text-lg font-medium">Address:</p>
                <p>Lorem Ipsum, 40C, Lorem Ipsum dummy, Lorem Ipsum, Ch 98054</p>
              </div>
              <div className="flex lg:gap-8 md:gap-4 gap-6 items-center border-b-[1px] border-b-[#737373] py-3">
                <p className="text-lg font-medium">Ph & Fax:</p>
                <div>
                  <p>+123 456 789</p>
                  <p>test@info.com</p>
                </div>
              </div>
              <div className="flex lg:gap-8 md:gap-4 gap-6 items-center py-3">
                <p className="text-lg font-medium">Address:</p>
                <div>
                  <p>Mon-Fri: 9:30am - 6:30pm</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] md:w-[30%] w-full py-28 lg:px-0 md:px-2 px-0 bg-[#131313] lg:rounded-r-md md:rounded-r-md rounded-r-none">
            <p className="text-white text-xl text-center"><span className="text-[#FFA500]">24/7</span> Real Time Support</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl lg:mx-auto md:mx-5 mx-5 py-12">
        <h1 className="text-[#131313] lg:text-4xl md:text-3xl text-2xl font-bold lg:ml-8 md:ml-8 ml-0 lg:text-start md:text-start text-center">GET IN TOUCH</h1>
        <div className="flex items-center my-5">
          <div className="decor-left">
            <span></span>
          </div>
          <p className="text-[#131313] text-sm font-bold px-4 uppercase -mt-2">Send us a message</p>
          <div className="decor-right">
            <span></span>
          </div>
        </div>
        <div className="lg:flex md:flex grid grid-cols-1 lg:gap-12 md:gap-6 gap-12 pt-5">
          <div className="lg:w-3/5 md:w-3/5 w-full">
            <form className="flex flex-col gap-3">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <input id="name" type="text" placeholder="Your Name*" className="border-[1px] border-[#FFA500] outline-none focus:outline-none p-4 w-full rounded-md" required />
                <input id="email" type="email" placeholder="Your Email*" className="border-[1px] border-[#FFA500] outline-none focus:outline-none p-4 w-full rounded-md" required />
              </div>
              <PhoneInput
                country='bd'
                enableSearch='true'
              />
              <select className="text-[#848484] border-[1px] border-[#FFA500] outline-none focus:outline-none p-4 w-full rounded-md" required>
                <option value="">Category</option>
                <option value="Website Creation">Website Creation</option>
                <option value="Graphics design">Graphics design</option>
                <option value="Responsive web site">Responsive web site</option>
                <option value="Bug Fixing">Bug Fixing</option>
                <option value="Others">Others</option>
              </select>
              <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required className="border-[1px] border-[#FFA500] outline-none focus:outline-none p-4 w-full rounded-md" />
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} className="my-3" />
              <button className="submit-button full-width w-full" type="submit">
                <div className="svg-wrapper-1 mx-auto ">
                  <div className="svg-wrapper">
                    <svg
                      className="submit-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </form>
          </div>
          <div className="lg:w-2/5 md:w-2/5 w-full">
            <img className="w-75 rounded" src={contact_img} alt="" />
            <p className="lg:w-3/4 md:w-full w-full mt-5">We've driven online revenues of over $2 billion for our clients. Ready to know how we can help you?</p>
            <div className="mt-5">
              <p className="text-xl font-bold">info@demo.com</p>
              <p className="text-xl font-bold">+91 11 1111 2900</p>
            </div>
          </div>
        </div>
      </section>








      <div className="max-w-7xl lg:mx-auto md:mx-auto mx-5">
        {/* <section className="contact-address-area">
          <div className="mx-auto">
            <div className="sec-title-style1 text-center max-width">
              <div className="title ">CONTACT US</div>
              <div className="text">
                <div className="decor-left">
                  <span></span>
                </div>
                <p>Quick Contact</p>
                <div className="decor-right">
                  <span></span>
                </div>
              </div>

              <div className="bottom-text">
                <p>
                  We are looking forward to work with you. Please contact us to
                  discuss more about your preferred service. Don't miss out.
                </p>
              </div>
            </div>
            <div className="contact-address-box row">
              <div className="col-sm-4 single-contact-address-box text-center">
                <h3 className="text-xl">Affordable Pricing</h3>
                <h2>Lorem Ipsum is simply dummy</h2>
              </div>

              <div className="col-sm-4 single-contact-address-box main-branch">
                <h3>Company Name</h3>
                <div className="inner">
                  <ul>
                    <li>
                      <div className="title">
                        <h4>Address:</h4>
                      </div>
                      <div className="text">
                        <p className="text-2xl">
                          Lorem Ipsum, 40C, Lorem Ipsum dummy,
                          <br /> Lorem Ipsum, Ch 98054
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h4>Ph & Fax:</h4>
                      </div>
                      <div className="text">
                        <p className="text-2xl">
                          +123 456 789 <br /> test@info.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h4>Office Hrs:</h4>
                      </div>
                      <div className="text">
                        <p className="text-2xl">
                          Mon-Fri: 9:30am - 6:30pm
                          <br /> Sat-Sun: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4 single-contact-address-box text-center">
                <div className="icon-holder">
                  <span className="icon-question-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </span>
                </div>
                <h3 className="text-xl">
                  {" "}
                  <span className="from-text text-xl">24/7</span> Real Time
                  Support
                </h3>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div>
          <div className="contact_body">
            <div className="contain">
              <div className="wrapper">
                <div className="form">
                  <h4 className="text-3xl font-bold ml-8">GET IN TOUCH</h4>
                  <div className="sec-title-style1">
                    <div className="text">
                      <div className="decor-left">
                        <span></span>
                      </div>
                      <p className="text-2xl"> Send us a message</p>
                      <div className="decor-right">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center my-5">
                    <div className="decor-left">
                      <span></span>
                    </div>
                    <p className="text-[#131313] text-sm font-bold px-4 uppercase -mt-2">Send us a message</p>
                    <div className="decor-right">
                      <span></span>
                    </div>
                  </div>
                  <form id="submit-form" className="contact_form" action="">
                    <p>
                      <input
                        id="name"
                        className="form-input effect-6"
                        type="text"
                        placeholder="Your Name*"
                      />
                    </p>
                    <p>
                      <input
                        id="email"
                        className="form-input effect-6"
                        type="email"
                        placeholder="Your Email*"
                      />
                    </p>
                    <p className="full-width">
                      <PhoneInput
                        country='bd'
                        enableSearch='true'
                      />
                    </p>
                    <p className="full-width">
                      <select className="select form-input text-[#848484]">
                        <option value="Catagory">Catagory</option>
                        <option value="Website Creation">Website Creation</option>
                        <option value="Grapics design">Grapics design</option>
                        <option value="Responsive web site">Responsive web site</option>
                        <option value="Bug Fixing">Bug Fixing</option>
                        <option value="Others">Others</option>
                      </select>
                    </p>
                    <p className="full-width">
                      <textarea
                        minlength="20"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Your Message*"
                        required
                      ></textarea>
                      <small></small>
                    </p>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                    />
                    ,
                    <button className="submit-button full-width" type="submit">
                      <div className="svg-wrapper-1 mx-auto ">
                        <div className="svg-wrapper">
                          <svg
                            className="submit-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </form>
                </div>

                <div className="contacts contact-wrapper">
                  <div>
                    <img className="w-75 rounded" src={contact_img} alt="" />
                  </div>

                  <ul className="mt-4">
                    <li>
                      We've driven online revenues of over{" "}
                      <span className="highlight-text-grey">$2 billion</span> for our
                      clients. Ready to know how we can help you?
                    </li>
                    <span className="hightlight-contact-info">
                      <li className="email-info">
                        <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                        info@demo.com
                      </li>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                        <span className="highlight-text">+91 11 1111 2900</span>
                      </li>
                    </span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;

// 6LcIGfkjAAAAAKBsUtr6U-7WyUg9E-RRlcHgbHoy
