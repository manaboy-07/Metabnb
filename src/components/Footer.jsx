/** @format */

import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import {  BsFacebook} from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import FooterLogo from "../images/footL.svg";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className='p-5 bg-secondary text-white'>
      <div>
        <img src={FooterLogo} alt='' />
        <div className='icons mt-8'>
          <AiOutlineInstagram />
          <FaTwitter />
          <BsFacebook />
        </div>
        <div className='copyright'>
          <h2>&copy; {year} Metabnb</h2>
        </div>
      </div>

      <div>
        <h2 className='list-header text-xl text-white'>Community</h2>
        <ul>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>

      <div>
        <h2 className='list-header text-xl text-white'>Places</h2>
        <ul>
          <li>Castles</li>
          <li>Farms</li>
          <li>Beaches</li>
          <li>Learn More</li>
        </ul>
      </div>

      <div>
        <h2 className='list-header text-xl text-white'>About Us</h2>
        <ul>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
