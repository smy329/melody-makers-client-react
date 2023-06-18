import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import img1 from '../../assets/images/media-coverage/media1.png';
import img2 from '../../assets/images/media-coverage/media2.png';
import img3 from '../../assets/images/media-coverage/media3.png';
import img4 from '../../assets/images/media-coverage/media4.png';

const Media = () => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto p-5">
        <SectionHeader title="Melody Makers in Media" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Media;
