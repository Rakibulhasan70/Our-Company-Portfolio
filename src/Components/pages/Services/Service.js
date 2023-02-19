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
            <div class="title md:text-4xl text-2xl font-semibold">Let's Build Something</div>
            <div class="text flex justify-center items-center gap-5 mb-5">
              <div class="decor-left">
                <span></span>
              </div>
              <p className='-mt-2 md:text-xl text-base font-semibold'>our services</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>

            <div class="bottom-text">
              <p>
                End-to-end web solutions & bring ideas to life. And Advance your
                development process with Thinky storm highly proficient
                specialists
              </p>
            </div>
          </div>
          <div class="services-box">

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={setting} alt='Setting Icon' />
                </div>
                <h4>Web Development</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={speed} alt='Speed Icon' />
                </div>
                <h4>Fast Preformance</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={protect} alt='Protect Icon' />
                </div>
                <h4>UI/UX Design</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>


            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={backup} alt='Backup Icon' />
                </div>
                <h4>Back-end Development</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={freessl} alt='Freessl Icon' />
                </div>
                <h4>Mobile App Development</h4>
                <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
              </div>
            </div>

            <div class="box">
              <div class="ser-box">
                <div class="icon">
                  <img src={database} alt='Database Icon' />
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