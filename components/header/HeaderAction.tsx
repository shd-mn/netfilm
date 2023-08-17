import React from "react";
import { IoPersonSharp, IoSearch } from "react-icons/io5";

const HeaderAction = () => {
  return (
    <div className="flex items-center gap-2">
      <button type="button">
        <IoSearch className="text-2xl" />
      </button>
      <button
        className="inline-block rounded-full bg-gray-800 p-2"
        type="button"
      >
        <IoPersonSharp className="text-2xl " />
      </button>
    </div>
  );
};

export default HeaderAction;
