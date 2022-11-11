/** @format */

import React from "react";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className='flex py-8 px-20 justify-between items-center'>
      <div>
        <img src={Logo} alt='' className='logo' />
      </div>

      <div>
        <ul className='flex mt-7'>
          <li className='mx-3'>Home</li>
          <li className='mx-3'>Place to stay</li>
          <li className='mx-3'>NFTs</li>
          <li className='mx-3'>Community</li>
        </ul>
      </div>

      <div>
        <button className='p-3 text-white bg-primary rounded-md w-full'>
          Connect wallet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
