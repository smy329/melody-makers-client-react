import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';

const Home = () => {
  return (
    <div className="space-y-20">
      <Slider />
      <PopularClasses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
