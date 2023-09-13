import React from "react";
import Image from "next/image"; // Change 'image' to 'Image' for correct import
import { CustomButtonProps } from "@/types";
// seeting them up for reusability
const CustomButton = ({
  title,
  btnType,
  containerStyle,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`} // Use template literals to concatenate class names
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
