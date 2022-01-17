import React, { useState } from 'react';
import { Alert, Paper, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation'
import login from '../../../images/login.svg'
import googleIcon from '../../../images/googleIcon.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

    // console.log(field, value);
  }
  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }


  return (
    <>
      <Navigation />
      <Container data-aos="fade-up" data-aos-duration="1900">
        <Paper elevation={24} sx={{ p: 5, mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item sx={{ mt: 2 }} xs={12} md={6}>
              <h1 className="google-font text-warning"> Welcome Please Login
              </h1>

              {isLoading && <CircularProgress />
              }
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  required
                  sx={{ width: '75%', m: 1, fontStyle: 'italic' }}
                  id="standard-basic"
                  label="Email"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: '75%', m: 1, fontStyle: 'italic' }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <div style={{ justifyContent: "space-between", paddingTop: 10, paddingBottom: 6 }}>
                  <Link style={{ textDecoration: 'none' }}
                    to="/register"
                    variant="text">
                    <Button sx={{ color: '#2e7d32', fontSize: 12, fontStyle: 'italic' }}
                    >New user? Please Register</Button>
                  </Link>
                </div>

                <Button
                  onClick={handleLoginSubmit}
                  variant="contained"
                  sx={{ width: "32%", m: 1, fontStyle: 'italic', fontSize: 12 }}
                  style={{ backgroundColor: '#e65100' }}
                >Sign in</Button>

                {user?.email && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>SuccessFully logged in
                </Alert>}
                {authError && <Alert severity="error" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>{authError}
                </Alert>}
              </form>

              <hr style={{ color: "gray", width: "75%" }} />

              <Typography variant="body1" style={{ fontSize: "14px", fontWeight: "500", color: '#2e7d32', fontStyle: 'italic', padding: "5px" }} gutterBottom>You Can Also Sign in With:
              </Typography>

              <Button
                onClick={handleGoogleSignIn}
                style={{ width: "10%", }} ><img src={googleIcon} style={{ width: "100%" }} alt="google-icon" /></Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <img src={login} style={{ width: '100%', marginTop: 40 }} alt="" />
            </Grid>

          </Grid>
        </Paper>
      </Container >
    </>

  );
};

export default Login;