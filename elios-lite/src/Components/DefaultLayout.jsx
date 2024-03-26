import React from 'react';
import Navbar from './Navbar'

function DefaultLayout(props) {
  return (
    <div>
      <Navbar />
      <div className='content mt-5 border-2 h-[85vh] rounded-md'>{props.children}</div>
    </div>
  )
}

export default DefaultLayout
