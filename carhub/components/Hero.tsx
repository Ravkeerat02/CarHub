"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find , book or rent a car -- quickly and easuly
        </h1>
        <p className="hero_subtitle">
          Your car rental experience with our effortless booking process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          btnType={"button"}
        />
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
