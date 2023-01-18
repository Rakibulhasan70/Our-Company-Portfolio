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
        <div class="services-title">
            <div class="title">
                <h2><span> Our </span> Services</h2>
            </div>
        </div>

        <div class="services-box">

            <div class="box">
                <div class="ser-box">
                    <div class="icon">
                        <img src={setting}/>
                    </div>
                     <h4>Web Development</h4>
                     <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
            </div>

            <div class="box">
                <div class="ser-box">
                    <div class="icon">
                        <img src={speed}/>
                    </div>
                     <h4>Fast Preformance</h4>
                     <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
            </div>

            <div class="box">
                <div class="ser-box">
                    <div class="icon">
                        <img src={protect}/>
                    </div>
                     <h4>UI/UX Design</h4>
                     <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
            </div>


            <div class="box">
                <div class="ser-box">
                    <div class="icon">
                        <img src={backup}/>
                    </div>
                     <h4>Back-end Development</h4>
                     <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
            </div>

            <div class="box">
                <div class="ser-box">
                    <div class="icon">
                        <img src={freessl}/>
                    </div>
                     <h4>Mobile App Development</h4>
                     <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
            </div>

            <div class="box">
                <div class="ser-box">
                    <div class="icon">
                        <img src={database}/>
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