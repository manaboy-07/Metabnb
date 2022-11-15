/** @format */

import React from "react";
import Img1 from "../images/img1.png";
import Img2 from "../images/img2.png";
import Img3 from "../images/img3.png";
import Img4 from "../images/img4.png";
import Img8 from "../images/img8.png";

import Img5 from "../images/img5.png";
import Img7 from "../images/img7.png";

import Img6 from "../images/img6.png";

import DisplayProps from "./DisplayProps";
import Nfts from "./Nfts";
function Display() {
  return (
    <section>
      <div className='header p-5'>
        <h1 className='text-4xl text-center my-3'>
          Inspiration for your next adventure
        </h1>
      </div>

      <section>
        <div className='place-items-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4  '>
          <DisplayProps src={Img1} />
          <DisplayProps src={Img2} />
          <DisplayProps src={Img3} />
          <DisplayProps src={Img4} />

          <DisplayProps src={Img5} />
          <DisplayProps src={Img6} />
          <DisplayProps src={Img7} />
          <DisplayProps src={Img8} />
        </div>
        <Nfts />
      </section>
    </section>
  );
}

export default Display;
