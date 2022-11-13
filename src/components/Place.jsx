/** @format */

import React from "react";
import Setting from "../images/setting-5.svg";
import Img1 from "../images/img1.svg";
import Img2 from "../images/img2.svg";
import Img3 from "../images/img3.svg";
import Img4 from "../images/img4.svg";
import Img8 from "../images/img8.svg";
import DisplayProps from "./DisplayProps";
import Img5 from "../images/img5.svg";
import Img7 from "../images/img7.svg";
import Img9 from "../images/img9.svg";
import Img6 from "../images/img6.svg";
import Img10 from "../images/img10.svg";
import Img11 from "../images/img11.svg";
import Img12 from "../images/img12.svg";
import Img13 from "../images/img13.svg";
import Img14 from "../images/img14.svg";
import Img15 from "../images/img15.svg";
function Place() {
  return (
    <div>
      <section className='p-4 mr-4 overflow-x-scroll flex items-start justify-center md:overflow-x-hidden md:p-12'>
        <ul className='flex p-2 places-tags'>
          <li className='mx-3 lg:mx-9'>Restaurant</li>
          <li className='mx-3 lg:mx-9'>Cottage</li>
          <li className='mx-3 lg:mx-9'>Castle</li>
          <li className='mx-3 lg:mx-9'>fantast city</li>
          <li className='mx-3 lg:mx-9'>beach</li>
          <li className='mx-3 lg:mx-9'>Cabins</li>
          <li className='mx-3 lg:mx-9'>Off-grid</li>
          <li className='mx-3 lg:mx-9'>Farm</li>
        </ul>
        <div className='flex p-3 items-center justify-between rounded-md btn-location'>
          <h2>Location</h2>
          <div className='ml-2 '>
            <img src={Setting} alt='' />
          </div>
        </div>
      </section>
      <section>
        <div className='houses '>
          <DisplayProps src={Img1} />
          <DisplayProps src={Img2} />
          <DisplayProps src={Img3} />
          <DisplayProps src={Img4} />

          <DisplayProps src={Img5} />
          <DisplayProps src={Img6} />
          <DisplayProps src={Img7} />
          <DisplayProps src={Img8} />

          <DisplayProps src={Img9} />
          <DisplayProps src={Img10} />
          <DisplayProps src={Img11} />
          <DisplayProps src={Img12} />

          <DisplayProps src={Img13} />
          <DisplayProps src={Img14} />
          <DisplayProps src={Img15} />
          <DisplayProps src={Img1} />
        </div>
      </section>
    </div>
  );
}

export default Place;
