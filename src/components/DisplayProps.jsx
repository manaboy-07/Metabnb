/** @format */

import React from "react";
import Star from "../images/star.png";
function DisplayProps({ src }) {
  return (
    <div className='display flex-col justify-center items-center rounded-lg p-4 mt-4'>
      <img src={src} alt='' className='ml-5' />
      <div className='img-name flex mt-3 justify-between text-sm'>
        <h3>Desert King</h3>
        <h3>1MBT per night</h3>
      </div>
      <div className='img-location mt-3 flex justify-between text-sm'>
        <h3>2345KM away</h3>
        <h3>available for 2weeks stay</h3>
      </div>
      <div>
        <img src={Star} alt='' className='star mt-4' />
      </div>
    </div>
  );
}

export default DisplayProps;
