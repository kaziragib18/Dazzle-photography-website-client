import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

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

const BookingModal = ({ openBooking, handleBookingClose, packageData, date, setBookingSuccess }) => {
  const { name, img, price } = packageData;
  const { user } = useAuth();
  const history = useHistory();

  const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }

  const handleBookingSubmit = e => {
    const booking = {
      ...bookingInfo,
      serviceName: name,
      price,
      date: date.toLocaleDateString()
    }
    // console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          swal({
            title: 'Order has been placed successfully',
            icon: "success",
            button: "ok",
          });
          // setBookingSuccess(true);
          handleBookingClose();
          history.push('/dashboard')
        }
      })

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
        <div className='w-100 pb-2'>
          <img className='w-100' style={{ borderRadius: "20px" }} src={img} alt="" />
        </div>

        <form>
          <div>
            <h5 className='google-font text-center text-warning'>Booking information:</h5>
            <TextField
              sx={{ width: "60%", m: 1, fontStyle: 'italic' }}
              hiddenLabel
              disabled
              id="filled-hidden-label-small"
              variant="filled"
              defaultValue={name}
              size="small"
            />
            <TextField
              sx={{ width: "30%", m: 1, fontStyle: 'italic' }}
              hiddenLabel
              disabled
              id="filled-hidden-label-small"
              variant="filled"
              defaultValue={price}
              size="small"
            />
          </div>
          <TextField
            sx={{ width: "95%", m: 1, fontStyle: 'italic' }}
            hiddenLabel
            disabled
            id="filled-hidden-label-small"
            defaultValue={date.toDateString()}
            variant="filled"
            size="small"
          />
          <div>
            <h5 className='google-font text-center text-warning'>Personal information:</h5>
            <TextField
              sx={{ width: "40%", m: 1, fontStyle: 'italic' }}
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              name="customerName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />

            <TextField
              sx={{ width: "50%", m: 1, fontStyle: 'italic' }}
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
          </div>

          <TextField
            sx={{ width: "95%", m: 1, fontStyle: 'italic', }}
            hiddenLabel
            required={true}
            id="filled-hidden-label-small"
            variant="filled"
            name="phone"
            onBlur={handleOnBlur}
            placeholder="Contact Number"
            type="number"
            defaultValue=""
            size="small"
          />
          <Button
            onClick={handleBookingSubmit}
            variant="contained" sx={{ m: 1 }}
            style={{ backgroundColor: '#e65100' }}>Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;