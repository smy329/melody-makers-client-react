import React, { useEffect, useState } from 'react';
import PopularClassesCard from '../../components/PopularClassesCard';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/popular-classes')
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="conatiner mx-auto">
      <div>
        <h1 className="text-7xl font-bold text-center mb-10">Popular Classes </h1>
      </div>
      <Marquee pauseOnHover={true}>
        {classes.map((singleClass) => (
          <PopularClassesCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </Marquee>
    </div>
  );
};

export default PopularClasses;
