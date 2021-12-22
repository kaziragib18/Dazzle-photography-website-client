import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Services from '../Services/Services'
import Gallery from '../Gallery/Gallery';
import Footer from '../Shared/Navigation/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Services />
      <Gallery />

      <Footer/>
    </div>
  );
};

export default Home;