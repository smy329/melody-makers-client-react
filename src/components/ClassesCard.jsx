import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useRole from '../hooks/useInstructor';

const ClassesCard = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useRole();
  const { image, name, price, instructorName, totalSeats, enrolledStudents } = singleClass;
  const availableSeats = totalSeats - enrolledStudents;
  const handleSelectCourse = (name, user) => {
    if (!user) {
      return toast('Please log in before selecting this course');
    }
    toast(name);
  };
  console.log(isInstructor);
  return (
    <div
      className={`${
        availableSeats === 0 ? 'bg-red-600' : 'bg-white'
      }   shadow rounded border border-transparent hover:border-blue-500 cursor-pointer mx-2 `}
    >
      <div className=" bg-gray-200 flex flex-col justify-between object-cover">
        <img src={image} alt="" />
      </div>
      <div className="p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-medium">{name}</h1>
          <span className=" uppercase text-xl bg-green-50 p-1 border-green-500 border rounded text-green-700 font-bold">
            ${price}
          </span>
        </div>
        <p className="text-gray-400 text-sm my-1 flex-grow">Instructor: {instructorName}</p>
        <p className="text-gray-400 text-sm my-1 flex-grow">Availale Seats: {availableSeats}</p>

        <button
          className={`btn-theme w-full font-medium text-white rounded-md px-2 py-2 mt-3 disabled:bg-gray-500`}
          disabled={isAdmin || isInstructor || availableSeats === 0}
          onClick={() => {
            handleSelectCourse(name, user);
          }}
        >
          Select This Course
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
