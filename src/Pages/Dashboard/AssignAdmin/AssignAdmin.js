import { Alert, Button, Container, Grid, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import login from '../../../images/add_admin.svg';

const AssignAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = e => {
    setEmail(e.target.value);
  }
  const handleAdminSubmit = e => {
    const user = { email };

    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          swal({
            title: 'New Admin Added Successfully',
            icon: "success",
            button: "ok",
          });
          setSuccess(true);
        }

      })

    e.preventDefault();
  }

  return (
    <Container>
      <Paper elevation={24} sx={{ p: 4, mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 3 }} xs={12} md={6}>
            <h2 className="google-font text-warning"> Assign New Admin
            </h2>
            <Box>
              <form>
                <TextField
                  sx={{ font: 'italic', width: '60%', m: 1 }}
                  label="Enter Email"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <br />
                <Button
                  onClick={handleAdminSubmit}
                  variant="contained"
                  sx={{ width: "35%", m: 1 }}
                  style={{ backgroundColor: '#e23801', fontFamily: 'poppins', }}
                >Assign</Button>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={login} style={{ width: '80%', marginTop: 30 }} alt="" />
          </Grid>

        </Grid>
      </Paper>
    </Container >
  );
};

export default AssignAdmin;


