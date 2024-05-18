import Button from "@/components/UI/Button";
import type { SubscriptionOptionType } from "../../Subscriptions/data/subscriptionData";

type PropTypes = {
  data: SubscriptionOptionType;
  plan: "monthly" | "yearly";
};

function Plan({ data, plan }: PropTypes) {
  const handleClick = () => { };
  return (
    <article className="rounded-xl border-2 border-black-15 bg-black-10 p-12">
      <h4 className="mb-4 text-2xl font-bold">{data.title}</h4>
      <p className="mb-12 text-xl text-grey-60">{data.description}</p>
      <span className="mb-12 flex items-baseline">
        <p className="text-[40px] font-semibold">{data.price}</p>
        <p className="text-grey-60">
          {plan === "monthly" ? "/month" : "/year"}
        </p>
      </span>
      <div className="flex items-center gap-4">
        <Button
          title="Start Free Trial"
          color="bg-black-08 hover:bg-black-12 border-2 border-black-15"
          handleClick={handleClick}
        />
        <Button title="Choose Plan" handleClick={handleClick} />
      </div>
    </article>
  );
}

export default Plan;
