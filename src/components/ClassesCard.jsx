import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const ClassesCard = ({ singleClass }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { image, className, price, instructorName, totalSeats, enrolledStudents, _id } = singleClass;
  const availableSeats = totalSeats - enrolledStudents;
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const { data: selectedFromDB = [], refetch } = useQuery({
    queryKey: ['selectedFromDB', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/selected-classes/${user?.email}`);
      return res.data;
    },
  });

  const handleSelectCourse = (user, _id) => {
    if (!user) {
      return toast('Please log in before selecting this course');
    }

    const selectClassData = { email: user.email, classId: _id };
    axiosSecure.patch('/users/select-classes', selectClassData).then((res) => {
      console.log(res.data);
      refetch();
    });
    navigate('/users/my-selected-classes');
  };

  const isClassSelected = selectedFromDB.includes(_id);
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
          <h1 className="text-gray-600 font-medium">{className}</h1>
          <span className="theme-badge-success">${price}</span>
        </div>
        <p className="text-gray-400 text-sm my-1 flex-grow">Instructor: {instructorName}</p>
        <p className="text-gray-400 text-sm my-1 flex-grow">Availale Seats: {availableSeats}</p>

        <button
          className={`btn-theme w-full font-medium text-white rounded-md px-2 py-2 mt-3 disabled:bg-gray-500`}
          disabled={isAdmin || isInstructor || availableSeats === 0 || isClassSelected}
          onClick={() => {
            handleSelectCourse(user, _id);
          }}
        >
          {isClassSelected ? 'Already Selected' : 'Select This Course'}
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
