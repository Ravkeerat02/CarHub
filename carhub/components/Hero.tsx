"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title text-4xl font-bold text-center mt-10">
          Discover, Drive, Delight: Your Journey, Your Way!
        </h1>
        <p className="hero_subtitle text-lg text-center mt-4">
          Explore a World of Cars and Elevate Your Journey
        </p>
        <a href="#catalogue-section" title="Explore Cars">
          <CustomButton
            title="Explore Cars"
            containerStyle="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            btnType={"button"}
          />
        </a>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
Hero;
