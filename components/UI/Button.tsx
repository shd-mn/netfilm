import React, { ReactElement } from "react";

type PropTypes = {
  title: string;
  icon?: ReactElement;
  handleClick: () => void;
  color?: string;
};

function Button({
  title,
  icon,
  handleClick,
  color = "bg-primary-45",
}: PropTypes) {
  return (
    <button
      type="button"
      className={`flex h-14 px-6 items-center gap-2 rounded-lg border-2 border-black-15 ${color}`}
      onClick={() => handleClick()}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span className="whitespace-nowrap">{title}</span>
    </button>
  );
}

export default Button;
