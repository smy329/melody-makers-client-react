import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ClassesCard from '../components/ClassesCard';

const Classes = () => {
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then((res) => res.json())
      .then((data) => setClassData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {classData.map((singleClass) => (
        <ClassesCard key={singleClass._id} singleClass={singleClass} />
      ))}
    </div>
  );
};

export default Classes;
