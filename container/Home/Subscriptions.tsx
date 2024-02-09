"use client";
import Button from "@/components/UI/Button";
import SectionHeader from "./components/SectionHeader";
import { subscriptionsHeaderData } from "./constants";
import { Dispatch, SetStateAction, useState } from "react";

function Subscriptions() {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  const handleClick = () => {};
  return (
    <section className="mb-36">
      <div className="container">
        <SectionHeader
          data={subscriptionsHeaderData}
          element={<BtnGroup plan={plan} setPlan={setPlan} />}
        />
      </div>
    </section>
  );
}

type BtnGroupType = {
  plan: string;
  setPlan: Dispatch<SetStateAction<"monthly" | "yearly">>;
};

export const BtnGroup = ({ plan, setPlan }: BtnGroupType) => {
  return (
    <div className="flex items-center rounded-xl border-2 border-black-15 bg-black-06 p-[10px]">
      <button
        className={`h-14 rounded-[10px] px-6 ${
          plan === "monthly" && "bg-black-12"
        }`}
        type="button"
        onClick={() => setPlan("monthly")}
      >
        Monthly
      </button>
      <button
        className={`h-14 rounded-[10px] px-6 ${plan === "yearly" && "bg-black-12"}`}
        type="button"
        onClick={() => setPlan("yearly")}
      >
        Yearly
      </button>
    </div>
  );
};

export default Subscriptions;
