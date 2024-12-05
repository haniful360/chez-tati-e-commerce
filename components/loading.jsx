
import React from 'react';

const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        {/* Spinner Outer Circle */}
        <div className="absolute w-full h-full border-4 border-t-transparent border-[#EA5326] rounded-full animate-spin"></div>
        {/* Spinner Inner Circle */}
        <div className="absolute w-12 h-12 top-2 left-2 border-4 border-t-transparent border-orange-500 rounded-full animate-spin-fast"></div>
        {/* Inner Dot */}
        <div className="absolute w-3 h-3 bg-orange-600 rounded-full top-6 left-6"></div>
      </div>
    </div>
    );
};

export default Loading;  


// export default function Loading() {
//   return (
//     <div className="space-y-8 p-4 max-w-[1320px] mx-auto">
//       {/* Skeleton Header */}
//       <div className="h-8 bg-gray-300 rounded-md w-1/3 animate-pulse"></div>

//       {/* Skeleton Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[...Array(6)].map((_, index) => (
//           <div
//             key={index}
//             className="space-y-4 border border-gray-200 p-4 rounded-lg shadow"
//           >
//             {/* Thumbnail Skeleton */}
//             <div className="h-48 bg-gray-300 rounded-md animate-pulse"></div>

//             {/* Title Skeleton */}
//             <div className="h-6 bg-gray-300 rounded-md w-2/3 animate-pulse"></div>

//             {/* Subtitle Skeleton */}
//             <div className="h-4 bg-gray-300 rounded-md w-1/2 animate-pulse"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



