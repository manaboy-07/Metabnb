/** @format */

import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import FooterLogo from "../images/footL.svg";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className='px-10 py-12 bg-secondary text-white flex flex-col items-center justify-between md:flex-row md:items-start'>
      <div className='mt-4  '>
        <img src={FooterLogo} alt='' />
        <div className='icons mt-8 flex justify-between items-center'>
          <BsFacebook />
          <AiOutlineInstagram />
          <FaTwitter />
        </div>
        <div className='copyright mt-8'>
          <h2>&copy; {year} Metabnb</h2>
        </div>
      </div>

      <div className='mt-4'>
        <h2 className='list-header text-2xl text-white my-4'>Community</h2>
        <ul>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>

      <div className='mt-4'>
        <h2 className='list-header text-2xl text-white my-4'>Places</h2>
        <ul>
          <li>Castles</li>
          <li>Farms</li>
          <li>Beaches</li>
          <li>Learn More</li>
        </ul>
      </div>

      <div className='mt-4'>
        <h2 className='list-header text-2xl text-white my-4'>About Us</h2>
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
