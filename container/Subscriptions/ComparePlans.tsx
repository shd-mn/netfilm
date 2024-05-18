import { Fragment } from "react";
import { plansData } from "./data/plansData";
import SectionHeader from "../Home/components/SectionHeader";

const sectionData = {
  title: "Compare our plans and find the right one for you",
  desc: "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.",
};

export default function ComparePlans() {
  return (
    <section className="mb-[140px]">
      <div className="container">
        <header>
          <SectionHeader data={sectionData} />
        </header>
        <div className="overflow-hidden rounded-lg border border-black-15">
          <table className="w-full table-fixed border-collapse">
            <thead className="rounded-xl bg-black-06">
              <tr>
                <th className="border border-black-15 p-6 text-start text-lg font-semibold">
                  Features
                </th>
                <th className="border border-black-15 p-6 text-start text-lg font-semibold">
                  Basic
                </th>
                <th className="border border-black-15 p-6 text-start text-lg font-semibold">
                  Standard
                </th>
                <th className="border border-black-15 p-6 text-start text-lg font-semibold">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {plansData.content.map((item) => (
                <Fragment key={item.id}>
                  <tr>
                    <td className="border border-black-15 p-6 font-medium text-grey-60">
                      {item.name}
                    </td>
                    <td className="border border-black-15 p-6 font-medium text-grey-60">
                      {item.basicPlan}
                    </td>
                    <td className="border border-black-15 p-6 font-medium text-grey-60">
                      {item.standartPlan}
                    </td>
                    <td className="border border-black-15 p-6 font-medium text-grey-60">
                      {item.premiumPlan}
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
