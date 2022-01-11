import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import NewsLetter from '../NewsLetter/NewsLetter';
import Blog from '../Blog/Blog';
import Footer from '../Shared/Footer/Footer';
import Team from '../Team/Team';
import Packages from '../Packages/Packages';
import FeatureCards from '../FeatureCard/Featurecards';
import Reviews from '../../Pages/Reviews/Reviews';

const Home = () => {
  // const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation />
      <Banner />
      <Team />
      <FeatureCards />
      {/* <Packages date={date} /> */}
      <Services />
      <Gallery />
      <NewsLetter />
      <Blog />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;