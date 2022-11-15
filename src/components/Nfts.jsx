/** @format */

import React from "react";
import Frame from "../images/Frame.png";
function Nfts() {
  return (
    <section className='p-8 bg-primary flex flex-col-reverse   items-center justify-around lg:flex-row'>
      <div className='info'>
        <h1 className='text-white  text-5xl mb-3'>Metabnb NFTS</h1>
        <h3 className='text-white mt-8'>
          Discover our NFT gift cards collection. Loyal <br /> customers gets
          amazing gift cards which are <br /> traded as NFTs. These NFTs gives
          our customer <br /> access to loads of our exclusive services.
        </h3>
        <button className='bg-white text-primary flex justify-center items-center py-2 px-4 mt-8 rounded-md'>
          Learn More
        </button>
      </div>
      <div className='img-collage'>
        <img src={Frame} alt='' />
      </div>
    </section>
  );
}

export default Nfts;
