import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import Package from '../Package/Package'

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])
  return (
    <div style={{backgroundColor:"black"}} className='home-services'>
      <Container>
        <div className="ourworks-title">
          <h3 className='google-font text-warning'>Our Premium Packages</h3>
          <h3>Affordable packages to choose from!</h3>
        </div>
        <div className="home-service-all-content">
          <Grid container spacing={5}>

            {
              packages.map(packageData => <Package
                key={packageData.id}
                packageData={packageData}
              ></Package>)
            }
          </Grid>

        </div>
      </Container>
    </div>
  );
};

export default Packages;
