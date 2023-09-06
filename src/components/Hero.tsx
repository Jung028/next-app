// pages/contact.tsx

"use client";
import React from 'react';
import { CustomButton } from '.';

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x padding-y">
        <h1 className='hero__title'>
          Find, book, or rent a software -- quickly and easily!
        </h1>

        <p className='hero__subtitle'>
          Streamline your productivity with our effortless subscription process
        </p>

        <CustomButton
        title="exploren cars"
        containerStyles=""
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src=""/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
