import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import * as BsIcon from 'react-icons/bs';
import swal from 'sweetalert';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    fontFamily: 'poppins'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    fontWeight: 500,
    fontFamily: 'poppins'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Bookings = ({ date }) => {
  const { user, token } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `https://radiant-stream-13822.herokuapp.com/bookings?email=${user.email}&date=${date.toLocaleDateString()}`

    fetch(url, {
      'authorization': `Bearer ${token}`,
      // 'content-type': 'application/json'
    })
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [bookings, date, user, token]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to cancel this order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://radiant-stream-13822.herokuapp.com/bookings/${id}`)
            .then(function (res) {
              if (res?.data?.deletedCount) {
                swal("Your Order has been Canceled!", "", "success")
              }
              // window.location.reload();
            })

        } else {
          swal("Your order is processing!");
        }
      });

  }


  return (
    <div data-aos="fade-up" data-aos-duration="1900">
      <div>
        <Paper elevation={12}><h4 className=' text-center p-4 google-font'>Your have {bookings.length} booking Sheduled</h4></Paper>
      </div>
      {bookings.length ?
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="Bookings table">
            <TableHead>
              <TableRow>
                {/* <StyledTableCell>Name</StyledTableCell> */}
                <StyledTableCell align="center">Contact Info</StyledTableCell>
                <StyledTableCell align="center">Package</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Payment</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((mybooking) => (
                <StyledTableRow key={mybooking._id}>
                  {/* <StyledTableCell component="th" scope="row">
                    {mybooking.customerName}
                  </StyledTableCell> */}

                  <StyledTableCell align="center">{mybooking.email}</StyledTableCell>


                  <StyledTableCell align="center">{mybooking.serviceName}</StyledTableCell>
                  <StyledTableCell align="center">$ {mybooking.price}</StyledTableCell>

                  <StyledTableCell align="center">{mybooking.payment ?
                    'Paid' :
                    <Link style={{ textDecoration: "none" }} to={`/dashboard/payment/${mybooking._id}`}><Button variant="contained" style={{ backgroundColor: 'green' }}>Pay</Button></Link>
                  }
                  </StyledTableCell>

                  <StyledTableCell align="center">

                    <Button
                      onClick={() => handleDelete(mybooking._id)}
                      variant="contained" style={{ backgroundColor: 'red' }}><DeleteOutlineIcon />
                    </Button></StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        :
        <div className='p-3'>
          <h1 className="text-muted text-center mb-3"><BsIcon.BsEmojiFrown /></h1>
          <h3 className='google-font text-center text-danger'>You Didn't Book Any Package Today</h3>
        </div>
      }
    </div>
  );
};

export default Bookings;