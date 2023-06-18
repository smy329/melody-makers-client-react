import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Stats from './Stats';
import OneRoofManyRoles from './OneRoofManyRoles';
import ExploreCourse from './ExploreCourse';
import Awards from './Awards';
import Media from './Media';

const Home = () => {
  return (
    <div className="space-y-20">
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <OneRoofManyRoles />
      <Stats />
      <ExploreCourse />
      <Awards />
      <Media />
    </div>
  );
};

export default Home;
