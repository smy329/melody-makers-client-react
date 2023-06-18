import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div>
      <h1 className="text-4xl md:text-7xl font-bold text-center mb-10">{title} </h1>
    </div>
  );
};

export default SectionHeader;
