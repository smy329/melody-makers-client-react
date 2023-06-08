import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';

const Home = () => {
  return (
    <div className="space-y-20">
      <Slider />
      <PopularClasses />
    </div>
  );
};

export default Home;
