"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { Flags } from "react-phone-number-input";

type Inputs = {
  firstName: string;
  lastName: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[50px]"
    >
      <div className="flex gap-[50px]">
        <div className="w-full">
          <label className="mb-3 inline-block">First Name</label>
          <input
            {...(register("firstName"), { required: true })}
            placeholder="Enter first name"
            className="w-full rounded-lg border-2 border-black-15 bg-black-08 p-5 text-lg placeholder:text-grey-60 hover:border-black-12"
          />
        </div>

        <div className="w-full">
          <label className="mb-3 inline-block">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            placeholder="Enter last name"
            className="w-full rounded-lg border-2 border-black-15 bg-black-08 p-5 text-lg placeholder:text-grey-60 hover:border-black-12"
          />
        </div>
      </div>
      {/* <PhoneInput defaultCountry="RU" value={value} onChange={setValue} /> */}

      {/* errors will return when field validation fails  */}
      {errors.lastName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
