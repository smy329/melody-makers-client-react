import React, { useContext } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const MySelectedClassesCard = ({ singleClassFromDB, handleDelete }) => {
  const { user, loading } = useContext(AuthContext);
  const { _id, image, price, name, instructorName, totalSeats, enrolledStudents } = singleClassFromDB;
  const availableSeats = totalSeats - enrolledStudents;
  const navigate = useNavigate();

  const handlePayment = (_id) => {
    toast('Loading payment page');
    console.log(_id);
    navigate('/users/make-payment', { state: { _id } });
    //return <Navigate to="/users/make-payment" state={{ _id: _id }} />;
  };

  return (
    <div className={`bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer mx-2 `}>
      <div className=" bg-gray-200 flex flex-col justify-between object-cover">
        <img src={image} alt="" />
      </div>
      <div className="p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-medium">{name}</h1>
          <span className=" uppercase text-xl bg-green-50 px-3 py-1 border-green-500 border rounded text-green-700 font-bold">
            ${price}
          </span>
        </div>
        <p className="text-gray-400 text-sm my-1 flex-grow">Instructor: {instructorName}</p>
        <p className="text-gray-400 text-sm my-1 flex-grow">Availale Seats: {availableSeats}</p>

        <div className="flex gap-2">
          <button
            className="btn-theme flex-1"
            onClick={() => {
              handlePayment(_id);
            }}
          >
            Pay
          </button>
          <button
            className="btn btn-error flex-1"
            onClick={() => {
              handleDelete(user, _id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClassesCard;
