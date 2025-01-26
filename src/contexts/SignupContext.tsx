"use client";

import { SignupDataT } from "@/libs/types";
import { createContext, ReactNode, useState } from "react";

type ContextType = {
  step: number;
  setStep: (ele: number) => void;
  handleNextStep: (formData: SignupDataT) => void;
  handleSignup: (categories: number[]) => void;
};

export const SignupManager = createContext<ContextType | null>(null);

export default function SignupContext({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number>(2);
  const [info, setInfo] = useState<SignupDataT | null>(null);

  const handleNextStep = (formData: SignupDataT) => {
    setInfo(formData);
    setStep(2);
    console.log(info);
  };

  const handleSignup = (categories: number[]) => {
    console.log(categories);
  };

  return (
    <SignupManager.Provider
      value={{ step, setStep, handleNextStep, handleSignup }}
    >
      {children}
    </SignupManager.Provider>
  );
}
