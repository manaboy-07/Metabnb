/** @format */

import React from "react";

function LogoAdsProps({ title, src }) {
  return (
    <div className='flex px-14 mt-3'>
      <img src={src} alt='stuff' />
      <h2 className='text-white text-2xl text-center mt-2 mx-2'>{title}</h2>
    </div>
  );
}

export default LogoAdsProps;
