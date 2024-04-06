import React from 'react';

function Loader() {
  return (
    <div className='absolute h-screen w-screen flex items-center justify-center z-10'>
      <div className="border-gray-300 h-28 w-28 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}

export default Loader;
