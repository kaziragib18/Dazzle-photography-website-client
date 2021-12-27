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

const Home = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation />
      <Banner />
      <Team />
      <Packages date={date} />
      <Services />
      <Gallery />
      <NewsLetter/>
      <Blog />
      <Footer/>
    </div>
  );
};

export default Home;