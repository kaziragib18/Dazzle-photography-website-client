import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Calender from '../../Shared/Calender/Calender';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={0}>
      <Grid item xs={7} sm={8} md={6} lg={4}>
        <Box
          data-aos="fade-up" data-aos-duration="1900"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "100%"
            },
          }}
        >
          <Paper elevation={16}>
            <Calender
              date={date}
              setDate={setDate}></Calender>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Box
          data-aos="fade-up" data-aos-duration="1900"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              p: 1,
              width: "100%",
              height: "auto",
            },
          }}
        >
          <Paper elevation={16}>
            <Bookings date={date} />
          </Paper>
        </Box>
      </Grid>

    </Grid>
  );
};

export default DashboardHome;