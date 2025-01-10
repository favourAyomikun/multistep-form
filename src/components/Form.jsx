import React from "react";
import { useForm } from "../context/FormsContext";
import { FormLayout } from "./FormLayout";
import InputField from "./InputField";
import NextBtn from "./NextBtn";

export const Form = () => {
  const {
    name,
    phone,
    email,
    handleName,
    handlePhone,
    handleEmail,
    nameError,
    phoneError,
    emailError,
  } = useForm();
  return (
    <FormLayout>
      <h1 className="text-[3.2rem] font-bold text-denim sma:text-[2.4rem]">
        Personal info
      </h1>
      <h2 className="text-grey text-[1.6rem] leading-[2.5rem] mb-[3.5rem]">
        Please provide your name, email address, and phone number.
      </h2>
      <div className="flex flex-col gap-[2.4rem]">
        <InputField
          id="name"
          label="Name"
          type="text"
          placeholder="e.g Favour Lola"
          value={name}
          onChange={handleName}
          error={nameError}
        />
        <InputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="e.g favourlola@gmail.com"
          value={email}
          onChange={handleEmail}
          error={emailError}
        />
        <InputField
          id="number"
          label="Phone Number"
          type="number"
          placeholder="e.g +234 9944 1222 33"
          value={phone}
          onChange={handlePhone}
          error={phoneError}
        />
      </div>
      <NextBtn />
    </FormLayout>
  );
};
