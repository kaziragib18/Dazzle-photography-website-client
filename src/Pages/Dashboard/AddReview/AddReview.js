import React from 'react';
import swal from 'sweetalert';
// import useAuth from '../../../hooks/useAuth';
import Review from '../../../images/review.svg';
import './AddReview.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddReview = () => {
  // const { user } = useAuth();
  const history = useHistory();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(5)
  const [image, setImage] = useState(null)
  const [desc, setDesc] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);
    formData.append('rating', rating);
    formData.append('desc', desc);

    fetch(`http://localhost:5000/reviews`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data)
        if (data?.insertedId) {
          swal({
            title: 'Your review has been posted!',
            icon: "success",
            button: "ok",
          });
          history.push('/')
        }
      }).catch(error => {
        console.log('Error', error)
      })

  }

  return (
    <div className="container">
      <div>
        <div className="row">
          <hr className="text-light mt-2" />
          <div className="col-md-6">
            <div className="add__review ms" data-aos="fade-right" data-aos-duration="1900">
              <h2 className="google-font text-warning">Add Your Reviews</h2>
              <hr />
              <form onSubmit={handleSubmit}>
                <input
                  placeholder='Enter Your Name'
                  onChange={e => setName(e.target.value)}
                  required />

                <input
                  placeholder='Enter Your Email'
                  onChange={e => setEmail(e.target.value)}
                  required />

                <input type="number" step="0.1" min="1" max="5" placeholder="Rate Your Experience Out of Five"
                  onChange={e => setRating(e.target.value)}
                  required />

                <input style={{ border: "1px solid gray" }}
                  required
                  accept="image/*" type="file" placeholder='image URL'
                  onChange={e => setImage(e.target.files[0])}
                />

                <textarea placeholder="Your Review"
                  onChange={e => setDesc(e.target.value)}
                  required />

                {/* <input style={{ backgroundColor: "darkorange", color: "white" }} type="submit" value="Submit" /> */}

                <button className="btn btn-warning py-2 px-4 mt-2 mb-5" type="submit">Submit</button>

              </form>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-duration="1900">
            <div>
              <img className="w-100 mt-3" src={Review} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddReview;