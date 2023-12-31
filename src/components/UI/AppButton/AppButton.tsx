import React from "react";
import classes from "./AppButton.module.scss";

interface IAppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
}

export const AppButton = ({
  type = "button",
  buttonLabel,
  className,
  onClick,
}: IAppButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${classes.AppButton} ${className}`}
    >
      {buttonLabel}
    </button>
  );
};
