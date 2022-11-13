/** @format */

import React from "react";
import Fox from "../images/fox.svg";
import Wallet from "../images/wallet.svg";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineX } from "react-icons/hi";
function Modal({ open, close }) {
  if (!open) return null;

  return (
    <section className='overlay'>
      <div className='my-modal   p-4 bg-white rounded-lg'>
        <div className='modal-container'>
          <div className='connect flex justify-between item-center'>
            <h1 className='text-xl'>Connect Wallet</h1>
            <HiOutlineX onClick={close} className='cursor-pointer text-xl' />
          </div>
          <hr className='mt-4' />
          <div className='mt-3'>
            <h3 className='text-slate-500'>Choose your preferred wallet: </h3>
            <div className='img-sections'>
              <div className='img1 flex items-center justify-between p-2 mt-3 rounded-lg hover:bg-slate-200 cursor-pointer'>
                <div className='flex'>
                  <img src={Fox} alt='' />
                  <h2 className='mt-2 ml-2'>MetaMask</h2>
                </div>
                <BsChevronRight className='cursor-pointer' />
              </div>
              <div className='img-2 flex items-center justify-between  p-2 mt-3 rounded-lg hover:bg-slate-200 cursor-pointer'>
                <div className='flex'>
                  <img src={Wallet} alt='' />
                  <h2 className='mt-2 ml-2'>WalletConnect</h2>
                </div>
                <BsChevronRight className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
