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
        <div className="absolute inset-0 -z-10 h-screen w-screen items-center px-5 py-24 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className=''>{props.children}</div>
      
    </div>
  )
}

export default DefaultLayout;





