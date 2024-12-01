// ProgressBar.js
import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div className="text-xs font-semibold inline-block text-teal-600 py-1 px-2 rounded-full text-center">
          {percentage}%
        </div>
      </div>
      <div className="relative flex flex-col w-full">
        <div className="flex mb-2 items-center justify-between">
          <div className="flex-1 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-teal-600 h-2.5 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
