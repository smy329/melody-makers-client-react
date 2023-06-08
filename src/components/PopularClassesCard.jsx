import React from 'react';

const PopularClassesCard = ({ singleClass }) => {
  const { name, image, instructorName, desc } = singleClass;
  return (
    <div class=" w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer mx-2">
      <div class=" w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center object-cover">
        <img src={image} alt="" />
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between">
          <h1 class="text-gray-600 font-medium">{name}</h1>
          <button class="text-gray-500 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <p class="text-gray-400 text-sm my-1 flex-grow">{desc}</p>
        <span class=" uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">
          {instructorName}
        </span>
      </div>
    </div>
  );
};

export default PopularClassesCard;
