import React from 'react';
import './Services.css'
import setting from '../../../Assets/setting.png'
import speed from '../../../Assets/speed.png'
import protect from '../../../Assets/protect.png'
import backup from '../../../Assets/backup.png'
import freessl from '../../../Assets/freessl.png'
import database from '../../../Assets/database.png'

const Service = () => {
  return (
    <div>
      <section class="services">
        <div class="s-container">
          <div class="sec-title-style1 text-center max-width">
            {/* <div class="title ">Let's Build Something</div> */}
            <div className="my-12">
              <h1 className="text-black lg:text-4xl md:text-3xl text-2xl font-bold text-center">
                Let's Build Something
              </h1>
              <div className="flex items-center justify-center my-5">
                <div className="decor-left">
                  <span></span>
                </div>
                <p className="text-[#A370F0] text-sm font-bold px-4 uppercase -mt-2">
                  Quick Contact
                </p>
                <div className="decor-right">
                  <span></span>
                </div>
              </div>
            </div>

          
          </div>
          <div class="services-box">
            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={setting} alt='..' />
                </div>
                <h4>Web Development</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={speed} />
                </div>
                <h4>Fast Preformance</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={protect} />
                </div>
                <h4>UI/UX Design</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={backup} />
                </div>
                <h4>Back-end Development</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={freessl} />
                </div>
                <h4>Mobile App Development</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={database} />
                </div>
                <h4>Product Engineering</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;