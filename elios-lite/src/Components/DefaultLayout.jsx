import React from 'react';
import Navbar from './Navbar';
import Loader from "../Components/Loader";
import { useSelector } from 'react-redux';

function DefaultLayout(props) {
  const loading = useSelector(state => state.loading);

  return (
    <div className="">
      <Navbar />
      {loading && (
        <div className="">
          <Loader />
        </div>
      )}
      <div className='fixed left-0 top-0 -z-10 h-full w-full'>
        <div class="absolute inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div class=''>{props.children}</div>
      
    </div>
  )
}

export default DefaultLayout;





