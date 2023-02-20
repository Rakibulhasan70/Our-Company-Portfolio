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
import Service from '../Services/Service';




const Home = () => {
    return (
      <div>
        <Banner></Banner>

        <Service />

      

        

        <CounterPages />

        <Technologies></Technologies>

        <Footer></Footer>
      </div>
    );
};

export default Home;