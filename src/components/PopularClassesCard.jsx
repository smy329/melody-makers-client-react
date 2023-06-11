import React from 'react';

const PopularClassesCard = ({ singleClass }) => {
  const { className, image, instructorName, desc } = singleClass;
  console.log(singleClass);
  return (
    <div className=" w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer mx-2">
      <div className=" w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center object-cover">
        <img src={image} alt="" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-medium">{className}</h1>
          <button className="text-gray-500 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-400 text-sm my-1 flex-grow">{desc}</p>
        <span className=" uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">
          {instructorName}
        </span>
      </div>
    </div>
  );
};

export default PopularClassesCard;
