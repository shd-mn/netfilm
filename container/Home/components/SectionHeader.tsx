import { ReactNode } from "react";

type headerData = {
  title: string;
  desc: string;
};

type PropTypes = {
  data: headerData;
  element?: ReactNode;
};

function SectionHeader({ data, element }: PropTypes) {
  return (
    <header className="mb-20 flex items-end justify-between gap-24">
      <div className="">
        <h2 className="mb-4 text-4xl font-bold">{data.title}</h2>
        <p className="text-lg text-grey-60 w-4/5">{data.desc}</p>
      </div>
      {element && element}
    </header>
  );
}

export default SectionHeader;
