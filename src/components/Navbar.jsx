/** @format */

import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      <div >
        <div className='flex py-8 px-20 justify-between items-center'>
          <div>
            <img src={Logo} alt='' className='logo' />
          </div>

          <div>
            <ul className='flex mt-7'>
              <li className='mx-3'>
                <Link to='/'>Home</Link>{" "}
              </li>
              <li className='mx-3'>
                <Link to='/place'>Place to stay </Link>{" "}
              </li>
              <li className='mx-3'>NFTs</li>
              <li className='mx-3'>Community</li>
            </ul>
          </div>

          <div>
            <button
              onClick={() => setOpenModal(true)}
              className='p-3 text-white bg-primary rounded-md w-full'>
              Connect wallet
            </button>
          </div>
        </div>
      </div>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </section>
    // HiMenuAlt3 import { IconName } from "react-icons/hi"; HiOutlineX
  );
}

export default Navbar;
