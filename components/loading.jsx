
import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="loader" />
        <h1 className='text-3xl'>Loading products...</h1>
      </div>
    );
};

export default Loading;  