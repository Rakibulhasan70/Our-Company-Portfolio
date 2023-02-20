import React from 'react';
import TypeWriterEffect from "react-typewriter-effect";
import './Banner.css'

const Banner = () => {
  return (
    <div className="main">
      <div className="max-w-7xl lg:mx-auto md:mx-auto mx-5 lg:py-0 md:py-0 py-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 flex justify-center items-center">
          <div>
            <h1 className='lg:text-5xl md:text-4xl text-3xl text-white'>Company Name</h1>
            <TypeWriterEffect
              className="text-5xl text-white"
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#ffff",
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
            <p className='lg:text-xl md:text-xl text-lg text-white'>
              We believe in serving excellence and Value return to our
              clients by using new-age technologies to provide seamless
              services and dependable deliveries.
            </p>
            <p class=" mt-10">
              <button class="cssbuttons-io-button">
                {" "}
                Get started
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </p>
          </div>

          <div className='mt-16'>
            <img
              className='rounded-lg border border-white'
              src="https://cdn.dribbble.com/users/1814344/screenshots/11954759/media/567476f9c2e4151e52edd69845c61fb1.png?compress=1&resize=768x576&vertical=top"
              alt=".."
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;