/** @format */

import React from "react";
import Img1 from "../images/img1.svg";
import Img2 from "../images/img2.svg";
import Img3 from "../images/img3.svg";
import Img4 from "../images/img4.svg";
import Img8 from "../images/img8.svg";

import Img5 from "../images/img5.svg";
import Img7 from "../images/img7.svg";

import Img6 from "../images/img6.svg";

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
