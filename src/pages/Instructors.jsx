import React, { useEffect, useState } from 'react';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/instructors')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {instructors.map((singleInstructor) => (
        <div className=" bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer mx-2 ">
          <div className=" bg-gray-200 flex flex-col justify-between object-cover">
            <img src={singleInstructor?.image} alt="" />
          </div>
          <div className="p-4 ">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 font-medium">{singleInstructor?.name}</h1>
              <span className=" uppercase text-xs bg-blue-50 p-0.5 border-blue-500 border rounded text-green-700 font-medium">
                {singleInstructor?.email}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-sm my-1 flex-grow">
                Total Classes: {singleInstructor?.classesName?.length}
              </p>
              <p className="text-gray-400 text-right text-sm my-1 flex-grow">
                Total Students: {singleInstructor.totalStudents}
              </p>
            </div>

            <button className="btn-theme mt-3">See Classes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
