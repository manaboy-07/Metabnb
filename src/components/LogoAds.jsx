/** @format */

import React from "react";
import LogoAdsProps from "./LogoAdsProps";
import OpenSea from "../images/opensea.png";
import Metamask from "../images/metaMsk.png";
import MbToken from "../images/mbtoken.png";

function LogoAds() {
  return (
    <div className='flex flex-col justify-between items-center mt-4 p-2 bg-primary lg:flex-row'>
      <LogoAdsProps src={MbToken} title='MBToken' />
      <LogoAdsProps src={Metamask} title='METAMASK' />
      <LogoAdsProps src={OpenSea} title='OpenSea' />
    </div>
  );
}

export default LogoAds;
