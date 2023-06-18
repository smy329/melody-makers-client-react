import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import img1 from '../../assets/images/awards/frame1.webp';
import img2 from '../../assets/images/awards/frame2.webp';
import img3 from '../../assets/images/awards/frame3.webp';

const Awards = () => {
  return (
    <div className="container mx-auto">
      <SectionHeader title="Awards" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <img src={img1} alt="" className="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default Awards;
