import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';

const AssignAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  // const { token } = useAuth();

  const handleOnBlur = e => {
    setEmail(e.target.value);
  }
  const handleAdminSubmit = e => {
    const user = { email };

    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        // 'authorization': `Bearer${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail('');
          setSuccess(true);
        }
      })

    e.preventDefault();
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "35%",
            height: 170
          },
        }}
      >

        <form>
          <h1 className='google-font'>Assign New Admin</h1>
          <TextField
            sx={{ font: 'italic', width: '100%', m: 1 }}
            label="New Admin Email"
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
            style={{ backgroundColor: '#388e3c', fontFamily: 'poppins', }}
          >Assign</Button>
        </form>
      </Box>

      {success && <Alert severity="success" style={{ width: "40%" }}>SuccessFully Assign New Admin!
      </Alert>}

    </div>
  );
};

export default AssignAdmin;