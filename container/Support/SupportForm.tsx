import Form from "@/components/Form";
import React from "react";

export default function SupportForm() {
  return (
    // // 1589/
    // 1.5921696574225122

    <section className="mb-36">
      <div className="container">
        <div className="grid grid-cols-[1fr_1.6fr] gap-20">
          <div>
            <h1 className="mb-4 text-5xl font-bold">
              Welcome to our support page!
            </h1>
            <p className="w-4/5 text-lg text-grey-60">
              We&apos;re here to help you with any problems you may be having
              with our product.
            </p>
          </div>
          <div className="rounded-xl border-2 border-black-15 bg-black-06 p-[50px]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
