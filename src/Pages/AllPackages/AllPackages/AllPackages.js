import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import PackageBanner from '../../AllPackages/PackageBanner/PackageBanner'
import Packages from '../../Packages/Packages'
import Footer from '../../Shared/Footer/Footer';
import BookingHeader from '../BookingHeader/BookingHeader';
import BookingAvailable from '../BookingAvailable/BookingAvailable';


const AllPackages = () => {
  return (
    <>
      <Navigation />
      <PackageBanner />
      <BookingHeader/>
      <BookingAvailable/>
      <Packages />
      <Footer />
    </>
  );
};

export default AllPackages;