import React from 'react'
import jsDev from '../../../Assets/services-img/mobile-development.png'
import mobileDev from '../../../Assets/services-img/web-desktop-mobileapp.png'
import serviceBanner from '../../../Assets/services-img/service-banner.jpg'
import loveHelping from '../../../Assets/services-img/hand-holding-heart-svgrepo-com.svg'
import light from '../../../Assets/services-img/light-bulb-14-svgrepo-com.svg'
import { Link } from 'react-router-dom'

function ServicesDetails() {
  return (
    <div>
      <section>
        <div className='flex justify-center items-center' style={{ "backgroundImage": `url(${serviceBanner})`, height: "300px" }}>
          <div className=''>
            <h2 className='text-3xl text-white font-bold'>Our Services</h2>
            <Link className='text-white' to="/">Home</Link>
          </div>
        </div>
        <div className='bg-[#0084c8] grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center items-center lg:rounded-br-[180px] py-10 px-5 lg:px-14'>
          <div className=''>
            <h1 className='text-3xl lg:text-4xl text-white font-bold border-l-4 pl-5 border-white'>Why We Are Different:</h1>
            <p className='text-white mt-5 text-xl font-sans text-justify'>Our core values define who we are as a company as well as the people who work here. They are what drive us to succeed and what we strive for every day.</p>
          </div>
          <div>
            <diV className="flex items-center pt-7 lg:ml-8 mb-5">
              <div className='bg-[#87C543] rounded-full inline-block p-6 border-2'>
                <img className='w-[90px] ' src={loveHelping}></img>
              </div>
              <div className='text-white pl-4 lg:pl-8'>
                <p className='text-xl font-bold'>We Love Helping People</p>
                <p className='font-sans text-justify'>We are friendly, engaging and always leave someone better off from our interaction. We are team players who do everything we can to help others. We serve people through technology. We are people people.</p>
              </div>
            </diV>
            <diV className="flex items-center  lg:ml-8 mb-5">
              <div className='bg-[#87C543] rounded-full inline-block p-6 border-2'>
                <img className='w-[90px] ' src={loveHelping}></img>
              </div>
              <div className='text-white pl-4 lg:pl-8'>
                <p className='text-xl font-bold'>We Are Committed to Excellence</p>
                <p className='font-sans text-justify'>We are friendly, engaging and always leave someone better off from our interaction. We are team players who do everything we can to help others. We serve people through technology. We are people people.</p>
              </div>
            </diV>
            <diV className="flex items-center lg:ml-8">
              <div className='bg-[#87C543] rounded-full inline-block p-6 border-2'>
                <img className='w-[90px] ' src={loveHelping}></img>
              </div>
              <div className='text-white pl-4 lg:pl-8'>
                <p className='text-xl font-bold'>We Are Forward Thinking</p>
                <p className='font-sans text-justify'>We are friendly, engaging and always leave someone better off from our interaction. We are team players who do everything we can to help others. We serve people through technology. We are people people.</p>
              </div>
            </diV>
          </div>
        </div>
      </section>
      <section className=' mx-8 mt-7 md:mx-20'>
        <div class="sec-title-style1 text-center max-width">
          <div class="title ">Let's Build Something</div>
          <div class="text">
            <div class="decor-left">
              <span></span>
            </div>
            <p>our services</p>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
          <div className='order-last lg:order-first'>
            <h2 className=' text-2xl md:text-3xl font-bold'><span className='border-b-2 pb-2 border-sky-500'>Javascript Dev</span>elopment</h2>
            <p className='text-xl text-justify my-5 font-sans'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-sans'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-sans'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-sans'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
          <div className=' flex justify-center items-center '>
            <img src={jsDev}></img>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
          <div className='flex justify-center items-center '>
            <img src={jsDev}></img>
          </div>
          <div className=''>
            <h2 className='text-3xl font-bold'><span className='border-b-2 border-sky-500 pb-2'>Web Develo</span>pment</h2>
            <p className='text-xl text-justify my-5 font-serif'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-serif'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-serif'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-serif'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-2 mt-5'>
          <div className='order-last lg:order-first'>
            <h2 className='text-3xl font-bold'><span className='border-b-2 border-sky-500 pb-2'>Web Des</span>ign</h2>
            <p className='text-xl text-justify my-5 font-sans'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-sans'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-sans'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-sans'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
          <div className=' flex justify-center items-center'>
            <img src={jsDev}></img>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
          <div className=' flex justify-center items-center'>
            <img src={jsDev}></img>
          </div>
          <div className=''>
            <h2 className='text-3xl font-bold'><span className='border-b-2 border-sky-500 pb-2'>Mobile Develo</span>pment</h2>
            <p className='text-xl text-justify my-5 font-serif'>JavaScript is a dynamic programming language that provides direct tools for website development. Our software development company has worked on many projects thus it has expertise in handling simple to complex projects.</p>
            <li className='text-xl text-justify mb-3 font-serif'>A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks. Frameworks are structures with a particular context and help you create web applications within that context.</li>
            <li className='text-xl text-justify mb-3 font-serif'>It is completely possible to build strong web applications without JavaScript frameworks, but frameworks provide a template that handles common programming patterns. Each time you have to build an application, you don’t need to write code for every single feature from scratch. Instead, you can build upon an existing feature set.</li>
            <li className='text-xl text-justify mb-3 font-serif'>JavaScript frameworks, like most other frameworks, provide some rules and guidelines. Using these rules and guidelines, any developer can make complex applications faster and more efficiently than if they decided to build from scratch. The rules and guidelines help shape and organize your website or web application too!</li>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesDetails
