import React, { useState } from "react";
import "./Contactus.css";
import contact_img from "../../../Assets/Business team work.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [value, setValue] = useState();
  return (
    <div className="contact-body max-w-7xl lg:mx-auto md:mx-auto mx-5">
      <section class="contact-address-area">
        <div class="mx-auto">
          <div class="sec-title-style1 text-center max-width">
            <div class="title ">CONTACT US</div>
            <div class="text">
              <div class="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>
            
            <div class="bottom-text">
              <p>
                We are looking forward to work with you. Please contact us to
                discuss more about your preferred service. Don't miss out.
              </p>
            </div>
          </div>
          <div class="contact-address-box row">
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-clock-1">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                  <span class="path5"></span>
                  <span class="path6"></span>
                  <span class="path7"></span>
                  <span class="path8"></span>
                  <span class="path9"></span>
                  <span class="path10"></span>
                  <span class="path11"></span>
                  <span class="path12"></span>
                  <span class="path13"></span>
                  <span class="path14"></span>
                  <span class="path15"></span>
                  <span class="path16"></span>
                  <span class="path17"></span>
                  <span class="path18"></span>
                  <span class="path19"></span>
                  <span class="path20"></span>
                </span>
              </div>
              <h3 className="text-2xl">Affordable Pricing</h3>
              <h2>Lorem Ipsum is simply dummy</h2>
            </div>

            <div class="col-sm-4 single-contact-address-box main-branch">
              <h3>Company Name</h3>
              <div class="inner">
                <ul>
                  <li>
                    <div class="title">
                      <h4>Address:</h4>
                    </div>
                    <div class="text">
                      <p className="text-2xl">
                        Lorem Ipsum, 40C, Lorem Ipsum dummy,
                        <br /> Lorem Ipsum, Ch 98054
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Ph & Fax:</h4>
                    </div>
                    <div class="text">
                      <p className="text-2xl">
                        +123 456 789 <br /> test@info.com
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Office Hrs:</h4>
                    </div>
                    <div class="text">
                      <p className="text-2xl">
                        Mon-Fri: 9:30am - 6:30pm
                        <br /> Sat-Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-question-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </span>
              </div>
              <h3 className="text-2xl">
                {" "}
                <span className="from-text text-5xl">24/7</span> Real Time
                Support
              </h3>
              <h2>Lorem Ipsum is simply dummy</h2>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="contact_body">
          <div class="contain">
            <div class="wrapper">
              <div class="form">
                <h4 className="text-3xl font-bold mb-8 ml-14">GET IN TOUCH</h4>
                <div class="sec-title-style1">
                  <div class="text">
                    <div class="decor-left">
                      <span></span>
                    </div>
                    <p className="text-2xl"> Send us a message</p>
                    <div class="decor-right">
                      <span></span>
                    </div>
                  </div>
                </div>
                {/* <h2 class="form-headline text-xl mb-5 from-text">
                  Send us a message
                </h2> */}
                <form id="submit-form" className="contact_form" action="">
                  <p>
                    <input
                      id="name"
                      class="form-input effect-6"
                      type="text"
                      placeholder="Your Name*"
                    />
                  </p>
                  <p>
                    <input
                      id="email"
                      class="form-input effect-6"
                      type="email"
                      placeholder="Your Email*"
                    />
                  </p>
                  <p class="full-width">
                    {/* <PhoneInput
                        className="form-input"
                        international
                        countryCallingCodeEditable={false}
                        country={"BD"}
                        value={value}
                        onChange={setValue}
                      /> */}
                    <input
                      id="company-name"
                      class="form-input effect-6"
                      type="Number"
                      placeholder="Your Number*"
                      required
                    />
                  </p>
                  <p class="full-width">
                    <select class="select form-input">
                      <option value="value1">Catagory</option>
                      <option value="value1">Website Creation</option>
                      <option value="value2">Grapics design</option>
                      <option value="value3">Responsive web site</option>
                      <option value="value3">Bug Fixing</option>
                      <option value="value3">Other</option>
                    </select>
                  </p>
                  <p class="full-width">
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

                  <button className="submit-button full-width" type="submit">
                    <div class="svg-wrapper-1 mx-auto ">
                      <div class="svg-wrapper">
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

              <div class="contacts contact-wrapper">
                <div>
                  <img className="w-75 rounded" src={contact_img} alt="" />
                </div>

                <ul className="mt-4">
                  <li>
                    We've driven online revenues of over{" "}
                    <span class="highlight-text-grey">$2 billion</span> for our
                    clients. Ready to know how we can help you?
                  </li>
                  <span class="hightlight-contact-info">
                    <li class="email-info">
                      <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                      info@demo.com
                    </li>
                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span class="highlight-text">+91 11 1111 2900</span>
                    </li>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
