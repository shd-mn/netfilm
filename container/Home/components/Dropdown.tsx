import { Dispatch, SetStateAction } from "react";
import type { QuestionType } from "../data/questionsData";
import { HiMinus, HiPlus } from "react-icons/hi2";

type PropType = {
  data: QuestionType;
  active: number | null;
  setActive: Dispatch<SetStateAction<number | null>>;
};

function Dropdown({ data, active, setActive }: PropType) {
  const isActive = active === data.id;

  const handleActive = () => {
    if (isActive) {
      setActive(null);
    } else {
      setActive(data.id);
    }
  };
  return (
    <article
      className={`flex justify-between p-8 ${
        isActive ? "items-start" : "items-center"
      }`}
    >
      <span className="rounded-[10px] border-2 border-black-15 bg-black-12 p-5 text-xl font-semibold">
        {data.id.toString().padStart(2, "0")}
      </span>
      <button
        type="button"
        className="block flex-1 text-start px-5"
        onClick={handleActive}
      >
        <p className="text-[22px] font-medium">{data.question}</p>
        {isActive && <p className="text-lg text-grey-60">{data.answer}</p>}
      </button>
      <span className="p-1">
        {isActive ? <HiMinus size={24} /> : <HiPlus size={24} />}
      </span>
    </article>
  );
}

export default Dropdown;
