import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

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

const BookingModal = ({ openBooking, handleBookingClose, packageData, date }) => {
  const { name, img } = packageData;
  const { user } = useAuth();

  const handleBookingSubmit = e => {
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
        <h2 className='google-font pb-2 text-center' >
          {name}
        </h2>
        <div className='w-100 pb-2'>
          <img className='w-100' style={{ borderRadius: "20px" }} src={img} alt="" />
        </div>

        <form onSubmit={handleBookingSubmit}>

          <TextField
            sx={{ width: "95%", m: 1, fontStyle: 'italic' }}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            defaultValue={user.displayName}
            size="small"
          />

          <TextField
            sx={{ width: "95%", m: 1, fontStyle: 'italic' }}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            defaultValue={user.email}
            size="small"
          />

          <TextField
            sx={{ width: "95%", m: 1, fontStyle: 'italic' }}
            hiddenLabel
            disabled
            id="filled-hidden-label-small"
            defaultValue={date.toDateString()}
            variant="filled"
            size="small"
          />

          <TextField
            sx={{ width: "95%", m: 1, fontStyle: 'italic' }}
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            name="phone"
            placeholder="Contact Number"
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