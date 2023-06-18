import React from 'react';
import admin from '../../assets/images/one-roof/admin.svg';
import parent from '../../assets/images/one-roof/parent.svg';
import student from '../../assets/images/one-roof/student.svg';
import teacher from '../../assets/images/one-roof/teacher.svg';

const OneRoofManyRoles = () => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto p-5">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-center mb-10">Bring Everyone Under One Roof </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5">
          <img src={admin} alt="" />
          <img src={parent} alt="" />
          <img src={student} alt="" />
          <img src={teacher} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OneRoofManyRoles;
