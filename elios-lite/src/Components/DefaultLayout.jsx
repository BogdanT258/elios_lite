import React from 'react';
import Navbar from './Navbar'

function DefaultLayout(props) {
  return (
    <div>
      <Navbar>
        <div className="content">
            {props.children}
        </div>
      </Navbar>
    </div>
  )
}

export default DefaultLayout
