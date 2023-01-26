import React from 'react';
import Carousel, { CarouselItem } from './Carousel';
import Banner from '../Banner/Banner';
import Avatar from '../../../Assets/avatar.png';
import LocationIconRed from '../../../Assets/location-icon.png';
import Quote from '../../../Assets/quote.png';
import WebDesignIcon from '../../../Assets/web-design-icon.png'

import Footer from '../Shared/Footer';
import Technologies from '../Technology/Technologies';
import CounterPages from '../counter/CounterPages';




const Home = () => {
    return (
      <div>
        <Banner></Banner>

        

       
        <div className="mt-10">
          <div class="sec-title-style1 text-center max-width ">
            <div class="title ">See What Our Clients Say’s</div>
            <div class="text">
              <div class="decor-left">
                <span></span>
              </div>
              <p>TESTIMONIAL</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl lg:mx-auto md:mx-auto px-5 py-12">
          <div className="bg-[#d2cfef] rounded-2xl py-12 px-12">
            <div className="lg:flex md:flex grid grid-cols-1 gap-24">
              <div className="lg:w-2/5 md:w-2/5 w-full">
                <p
                  className="lg:text-lg md:text-base text-sm font-semibold py-2 px-5 inline-block rounded-full text-[#ffff]"
                  style={{ backgroundColor: "rgba(247, 79, 34, 0.08)" }}
                >
                  Our Feedbacks
                </p>
                <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-3 text-white my-5">
                  What they're talking about us
                </p>
                <p className="lg:text-lg md:text-lg text-base text-white">
                  Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                  phaedrum. There are many.
                </p>
              </div>
              <div className="lg:w-3/5 md:w-3/5 w-full">
                <Carousel className="whitespace-nowrap">
                  <CarouselItem>
                    <div className="w-full p-10 grid grid-cols-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src={Avatar}
                              alt="avatar"
                              className="h-16 w-16 rounded-full border-4 border-[#E4E4E4]"
                            />
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-[#2E3033]">
                              Azizur Rahman{" "}
                              <span className="text-sm font-semibold text-[#0082C4] ml-1">
                                Volunteer
                              </span>
                            </p>
                            <p className="text-sm flex items-center gap-1 text-[#777B84]">
                              <img src={LocationIconRed} alt="location" />
                              Dhaka, Bangladesh
                            </p>
                          </div>
                        </div>
                        <div>
                          <img src={Quote} alt="Quote" />
                        </div>
                      </div>
                      <div className="!w-[570px]">
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. <br />
                            There are many variations of passages of Lorem Ipsum
                            available but the majority. <br />
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. There are
                            <br /> many variations
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full p-10 grid grid-cols-1">
                      <div className=" flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src={Avatar}
                              alt="avatar"
                              className="h-16 w-16 rounded-full border-4 border-[#E4E4E4]"
                            />
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-[#2E3033]">
                              Azizur Rahman{" "}
                              <span className="text-sm font-semibold text-[#0082C4] ml-1">
                                Volunteer
                              </span>
                            </p>
                            <p className="text-sm flex items-center gap-1 text-[#777B84]">
                              <img src={LocationIconRed} alt="location" />
                              Dhaka, Bangladesh
                            </p>
                          </div>
                        </div>
                        <div>
                          <img src={Quote} alt="Quote" />
                        </div>
                      </div>
                      <div className="!w-[570px]">
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. <br />
                            There are many variations of passages of Lorem Ipsum
                            available but the majority. <br />
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. There are
                            <br /> many variations
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full p-10 grid grid-cols-1">
                      <div className=" flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src={Avatar}
                              alt="avatar"
                              className="h-16 w-16 rounded-full border-4 border-[#E4E4E4]"
                            />
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-[#2E3033]">
                              Azizur Rahman{" "}
                              <span className="text-sm font-semibold text-[#0082C4] ml-1">
                                Volunteer
                              </span>
                            </p>
                            <p className="text-sm flex items-center gap-1 text-[#777B84]">
                              <img src={LocationIconRed} alt="location" />
                              Dhaka, Bangladesh
                            </p>
                          </div>
                        </div>
                        <div>
                          <img src={Quote} alt="Quote" />
                        </div>
                      </div>
                      <div className="!w-[570px]">
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. <br />
                            There are many variations of passages of Lorem Ipsum
                            available but the majority. <br />
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. There are
                            <br /> many variations
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <CounterPages />

        <Technologies></Technologies>

        

        <Footer></Footer>
      </div>
    );
};

export default Home;