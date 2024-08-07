import React from 'react';

const TravelList = ({ title, travels }) => {
  return (
    <div className="w-1/2 p-4">
      <div className="text-2xl font-bold mb-4 text-center text-appred">{title}</div>
      <div className="bg-[#f6cf9e] p-4 rounded-lg shadow">
        {travels.map((travel, index) => (
          <div key={index} className="mb-2">
            <div className="text-lg">{travel.location}</div>
            <div className="text-sm text-gray-600">{travel.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelList;