import React from 'react';
import Navbar from './Navbar';
import Loader from "../Components/Loader";
import { useSelector } from 'react-redux';

function DefaultLayout(props) {
  const loading = useSelector(state => state.loading);

  return (
    <div className="relative">
      <Navbar />
      {loading && (
        <div className="absolute top-1/2 left-1/2 z-50">
          <Loader />
        </div>
      )}
      <div className='content mt-5 border-2 h-[85vh] rounded-md'>{props.children}</div>
    </div>
  )
}

export default DefaultLayout;
