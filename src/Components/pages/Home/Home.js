import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import Technologies from '../Technology/Technologies';
import CounterPages from '../counter/CounterPages';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import useTitle from '../../../hooks/useTitle';
import Faq from '../Faq/Faq';

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Banner></Banner>
      {/* <Test></Test> */}

      <Service></Service>
      <WhatWeDo></WhatWeDo>
      <CounterPages />
      <Technologies />
    </div>
  );
};

export default Home;