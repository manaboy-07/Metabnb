/** @format */

import React from "react";
import LandingImg from "../images/landingImg.svg";
function LandingPg() {
  return (
    <section className='flex flex-col-reverse  mt-4 items-center justify-around lg:flex-row'>
      <div>
        <h1 className='text-5xl leading-snug tracking-wide'>
          Rent a <span className='text-primary'>Place</span> away from <br />{" "}
          <span className='text-primary'>Home</span> in the{" "}
          <span className='text-primary'>Metaverse</span>
        </h1>
        <div>
          <h4 className='mt-6'>
            we provide you access to luxury and affordable houses <br /> in the
            metaverse, get a chance to turn your imagination to reality at your{" "}
            <br />
            comfort zone
          </h4>
        </div>
        <div className='search'>
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

      <div className='landingImg'>
        <img src={LandingImg} alt='' />
      </div>
    </section>
  );
}

export default LandingPg;
