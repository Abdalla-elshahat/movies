

import React from 'react';
import './Footer.css';
import Linksfooter from "./linksoffooter"
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utels/jwttoken';

function Footer() {
  const token = cookies().get("token")?.value || "";
  const payload = verifyTokenForPage(token); // Get the translation function

  return (
    <>
      <Linksfooter payload={payload}/>
    </>
  );
}

export default Footer;
