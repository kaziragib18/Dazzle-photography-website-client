import axios from 'axios';
import { Container, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [packages])

  const handleDelete = (id) => {

    swal({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://localhost:5000/packages/${id}`)
            .then(function (res) {
              if (res?.data?.deletedCount) {
                swal("Deleted Successfully!!", "", "success");
              }
            })

        } else {
          swal("Your product is safe!");
        }
      });

  }

  return (
    <div>
      <h3 className='google-font text-warning p-0 fs-1'>Manage All Packages</h3>
      <hr />
      {
        packages.map(packageAll =>
          < div className='home-services p-0 ' key={packageAll._id} >
            <Container>
              <div className="home-service-all-content">
                <Grid container spacing={1}></Grid>
                <Grid item xs={12}>
                  <div className="Home-service-box">
                    <div className="home-service-box-image image-box">
                      <img className='gallery' src={packageAll.img} alt="" />
                    </div>
                    <div className='home-service-box-text'>
                      <h2>{packageAll.name}</h2>
                      <div>
                        <p>{packageAll.desc1} | {packageAll.desc2} | {packageAll.desc3} | {packageAll.desc4} | {packageAll.desc5}</p>
                      </div>
                      <div className='price-and-btn'>
                        <h3>$ {packageAll.price}</h3>
                        <Button style={{ color: "red" }}
                          onClick={() => handleDelete(packageAll._id)}
                        >Delete</Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              </div>
            </Container>
          </div>
        )
      }

    </div >

  );
};

export default ManagePackages;