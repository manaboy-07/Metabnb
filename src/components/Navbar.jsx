/** @format */

import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const toggleMenu = () => {
    setShowNav(!showNav);
  };
  return (
    <section>
      <nav className='hidden lg:block'>
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
      </nav>

      <nav className='block lg:hidden side-bar'>
        <div className='flex flex-col py-8 px-20 justify-between items-center'>
          <div>
            <img src={Logo} alt='' className='logo' />
          </div>
          {showNav ? (
            <HiOutlineX
              onClick={toggleMenu}
              className='menu text-3xl text-primary'
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className='menu text-3xl text-primary'
            />
          )}
          <div>
            <ul
              className={`flex flex-col mt-7 p-5 side-menu ${
                showNav ? "show" : "hide"
              }`}>
              <li className='mx-3 my-2' onClick={toggleMenu}>
                <Link to='/'>Home</Link>{" "}
              </li>
              <li className='mx-3 my-2' onClick={toggleMenu}>
                <Link to='/place'>Place to stay </Link>{" "}
              </li>
              <li className='mx-3 my-2' onClick={toggleMenu}>
                NFTs
              </li>
              <li className='mx-3 my-2' onClick={toggleMenu}>
                Community
              </li>
              <li>
                <div>
                  <button
                    onClick={() => setOpenModal(true)}
                    className='p-3 my-2 z-40 text-white bg-primary rounded-md '>
                    Connect wallet
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </section>
    //
  );
}

export default Navbar;
