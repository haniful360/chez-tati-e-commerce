
import React from 'react';

const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        {/* Spinner Outer Circle */}
        <div className="absolute w-full h-full border-4 border-t-transparent border-[#EA5326] rounded-full animate-spin"></div>
        {/* Spinner Inner Circle */}
        <div className="absolute w-12 h-12 top-2 left-2 border-4 border-t-transparent border-[#EA5326] rounded-full animate-spin-fast"></div>
        {/* Inner Dot */}
        <div className="absolute w-3 h-3 bg-[#EA5326] rounded-full top-6 left-6"></div>
      </div>
    </div>
    );
};

export default Loading;  


