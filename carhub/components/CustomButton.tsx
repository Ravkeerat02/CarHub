import React from "react";
import Image from "next/image"; // Change 'image' to 'Image' for correct import
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyle,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`} // Use template literals to concatenate class names
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
