import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import Package from '../Package/Package'

const Packages = ({ date }) => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])
  return (
    <div style={{ backgroundColor: "black" }} className='home-services'>
      <Container>
        <div>
          <h3 className='google-font text-warning'>Our Premium Packages</h3>
          <h2 style={{ fontSize: "2.6rem", color: "#e8e4e4bf" }}>Affordable packages to choose from!</h2>
        </div>
        <div className="home-service-all-content">
          <Grid container spacing={5}>

            {
              packages.map(packageData => <Package
                key={packageData.id}
                packageData={packageData}
                date={date}
              ></Package>)
            }
          </Grid>

        </div>
      </Container>
    </div>
  );
};

export default Packages;
