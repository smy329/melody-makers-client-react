import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData?.append('image', data?.image[0]);

    fetch(imageHostingUrl, {
      method: 'POST',
      body: formData, //dont try to stringfy here
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const { className, instructorName, instructorEmail, totalSeats, price } = data;
          const newClass = {
            className,
            instructorName,
            instructorEmail,
            totalSeats,
            instructorName,
            instructorEmail,
            price: parseFloat(price),
            status: 'pending',
            enrolledStudents: 0,
            feedback: '',
            image: imgData.data.display_url,
          };
          console.log(newClass);
          axiosSecure.post('/instructors/add-class', newClass).then((postedClass) => {
            console.log(postedClass.data);
            if (postedClass.data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class has been added successfully',
                showConfirmButton: false,
                timer: 1000,
              });
            }
            reset();
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-medium text-center">Add a Class</h1>
      <form className="w-3/5 mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            className="input input-bordered w-full"
            {...register('className', { required: true, maxLength: 200 })}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium">Class Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register('image', { required: true })}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            className="input input-bordered w-full"
            defaultValue={user.displayName}
            {...register('instructorName', { required: true, maxLength: 200 })}
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Email"
            className="input input-bordered w-full"
            defaultValue={user.email}
            {...register('instructorEmail', { required: true, maxLength: 200 })}
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Total Seats</span>
          </label>
          <input
            type="number"
            placeholder="Total Seats"
            className="input input-bordered w-full"
            {...register('totalSeats', { required: true })}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
            {...register('price', { required: true })}
          />
        </div>

        <div>
          <input type="submit" value="Add Class" className="btn-theme" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
