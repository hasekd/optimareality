import React, { useState } from "react";
import PropertyInfo from "@/components/ForSalePage/PropertyInfo";
import UserInfo from "@/components/ForSalePage/UserInfo";
import { useForm } from "react-hook-form";

type Inputs = {
  propType: string;
  area: string;
  city: string;
  address: string;
  description: string;
  name: string;
  email: string;
  phoneNumber: string;
};

const ForSaleContact = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit } = useForm<Inputs>();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <PropertyInfo onNextStep={nextStep} register={register} />;

    case 2:
      return (
        <UserInfo
          onPrevStep={prevStep}
          register={register}
          handleSubmit={handleSubmit}
        />
      );
  }

  return <></>;
};

export default ForSaleContact;
