import React, { useEffect, useState } from 'react';
import PopularInstructorsCard from '../../components/PopularInstructorsCard';
import Marquee from 'react-fast-marquee';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('https://melody-makers-camp-server-smy329-gmailcom.vercel.app/popular-instructors')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="conatiner mx-auto">
      <div>
        <h1 className="text-4xl md:text-7xl font-bold text-center mb-10">Popular Instructors </h1>
      </div>
      <Marquee pauseOnHover={true} direction="right">
        {instructors.map((singleInstructor) => (
          <PopularInstructorsCard key={singleInstructor._id} singleInstructor={singleInstructor} />
        ))}
      </Marquee>
    </div>
  );
};

export default PopularInstructors;
