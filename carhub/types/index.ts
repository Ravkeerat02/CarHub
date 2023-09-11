import { MouseEventHandler } from "react";

// setting up interface componetnst

export interface CustomButtonProps {
  title: string;
  containerStyle: string;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  btnType: "button" | "submit" | "";
}
