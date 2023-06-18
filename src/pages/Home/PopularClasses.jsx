import React, { useEffect, useState } from 'react';
import PopularClassesCard from '../../components/PopularClassesCard';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import SectionHeader from '../../components/SectionHeader';

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch('https://melody-makers-camp-server-smy329-gmailcom.vercel.app/popular-classes')
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="bg-blue-50">
      <div className="conatiner mx-auto p-5">
        <SectionHeader title="Popular Classes" />
        <Marquee pauseOnHover={true}>
          {classes.map((singleClass) => (
            <PopularClassesCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PopularClasses;
