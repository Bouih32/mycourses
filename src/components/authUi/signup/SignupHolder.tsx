"use client";

import { SignupManager } from "@/contexts/SignupContext";
import Signup from "./Signup";
import { useContext } from "react";
import PickCategory from "../pickcategory/PickCategory";

export default function SignupHolder() {
  const context = useContext(SignupManager);
  if (!context) return;

  const { step } = context;
  return <section>{step === 1 ? <Signup /> : <PickCategory />}</section>;
}
