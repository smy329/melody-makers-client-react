import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Stats from './Stats';

const Home = () => {
  return (
    <div className="space-y-20">
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <Stats />
    </div>
  );
};

export default Home;
