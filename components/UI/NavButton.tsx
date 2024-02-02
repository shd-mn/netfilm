import React, { ReactElement } from "react";

type PropTypes = {
  icon: ReactElement;
  handleClick: () => void;
  color?: string;
};

function NavButton({ icon, handleClick, color = "bg-black-10" }: PropTypes) {
  return (
    <button
      type="button"
      className={`h-14 w-14 rounded-lg border-2 border-black-15 ${color}`}
      onClick={() => handleClick()}
    >
      <span className="flex items-center justify-center">{icon}</span>
    </button>
  );
}

export default NavButton;
