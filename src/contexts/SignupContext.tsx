"use client";

import { createContext, ReactNode, useState } from "react";

type ContextType = {
  step: number;
  setStep: (ele: number) => void;
  handleNextStep: () => void;
};

export const SignupManager = createContext<ContextType | null>(null);

export default function SignupContext({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number>(1);
  const handleNextStep = () => {
    setStep(2);
  };

  return (
    <SignupManager.Provider value={{ step, setStep, handleNextStep }}>
      {children}
    </SignupManager.Provider>
  );
}
