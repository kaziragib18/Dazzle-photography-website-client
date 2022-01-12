import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/packages', data)
      .then(res => {
        console.log(res);
        if (res.data.insertedId) {
          swal({
            title: 'New Package Added Successfully',
            icon: "success",
            button: "ok",
          });
          reset()
        }
      })

  };

  return (
    <div className="add__package">
      <h2 className="google-font text-warning text-center">Add New Package</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("name", { required: true, maxLength: 50 })} placeholder="Package Name" />
        <textarea {...register("desc1")} placeholder="Description-1" />
        <textarea {...register("desc2")} placeholder="Description-2" />
        <textarea {...register("desc3")} placeholder="Description-3" />
        <textarea {...register("desc4")} placeholder="Description-4" />
        <textarea {...register("desc5")} placeholder="Description-5" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image url" required />

        <button className="btn btn-warning py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPackage;