import * as React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import PackageBanner from '../PackageBanner/PackageBanner'
import Packages from '../../Packages/Packages'
import Footer from '../../Shared/Footer/Footer';
import BookingHeader from '../BookingHeader/BookingHeader';
import BookingAvailable from '../BookingAvailable/BookingAvailable';


const AllPackages = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <>
      <Navigation />
      <PackageBanner />
      <BookingHeader date={date} setDate={setDate} />
      <BookingAvailable date={date} />
      <Packages date={date}/>
      <Footer />
    </>
  );
};

export default AllPackages;