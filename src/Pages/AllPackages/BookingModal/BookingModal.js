import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '0px 35px 0px 35px',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, packageData}) => {
  const { name, img, description } = packageData;

  const handleBookingSubmit= e =>{
    alert("Sumbiting");
    
    handleBookingClose();
    e.preventDefault();
  }

  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className='google-font pb-2 text-center' >
          {name}
        </h1>

        <form onSubmit={handleBookingSubmit}>
          <TextField
            sx={{ width: "95%", m: 1 }}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Your email"
            variant="filled"
            size="small"
          />

          <TextField
            sx={{ width: "95%", m: 1 }}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            defaultValue="Your Name"
            size="small"
          />

          <TextField
            sx={{ width: "95%", m: 1 }}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            name="phone"
            placeholder="Contact info"
            type="number"
            defaultValue=""
            size="small"
          />
          <Button type="submit" variant="contained" sx={{ m: 1 }} style={{ backgroundColor: '#e65100' }}>Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;