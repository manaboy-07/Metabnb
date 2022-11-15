/** @format */

import React from "react";
import LandingImg from "../images/landingImg.png";
import Display from "./Display";
import LogoAds from "./LogoAds";
function LandingPg() {
  return (
    <div>
      <section className='flex flex-col-reverse  mt-4 items-center justify-around lg:flex-row'>
        <div>
          <h1 className='land-cont leading-snug tracking-wide p-8 sm:p-2'>
            Rent a <span className='text-primary'>Place</span> away from <br />{" "}
            <span className='text-primary'>Home</span> in the{" "}
            <span className='text-primary'>Metaverse</span>
          </h1>
          <div>
            <h4 className=' px-8 py-2 lg:mt-2 lg:p-2'>
              we provide you access to luxury and affordable houses <br /> in
              the metaverse, get a chance to turn your imagination to reality at
              your <br />
              comfort zone
            </h4>
          </div>
          <div className='search ml-2'>
            <input
              type='text'
              placeholder='Search for a location'
              className='outline-none input-land'
            />
            <button className='search-btn rounded-md p-3 bg-primary text-white'>
              Search
            </button>
          </div>
        </div>

        <div className='landingImg  p-8'>
          <img src={LandingImg} alt='' />
        </div>
      </section>

      <LogoAds />
      <Display />
    </div>
  );
}

export default LandingPg;
