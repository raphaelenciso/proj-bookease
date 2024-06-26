"use client";

import { IconType } from "react-icons";

import Loader from "./Loader";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button";
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  iconColor?: string;
  owner?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isLoading,
  type = "submit",
  outline,
  small,
  icon: Icon,
  iconColor,
  owner,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={owner ? owner : disabled}
      className={`flex justify-center relative disabled:cursor-not-allowed rounded-lg  transition w-full 
      ${
        outline
          ? "bg-white border-black text-black"
          : "bg-gradient-to-r from-main-500 via-main-550 to-main-600 text-white"
      }
      ${
        small
          ? "py-2 md:py-1 text-md md:text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }
      ${disabled || owner ? "" : "hover:opacity-80"} 
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute left-4 top-3"
          color={iconColor && iconColor}
        />
      )}
      {disabled && !owner ? <Loader small={small} /> : label}
    </button>
  );
};
export default Button;
