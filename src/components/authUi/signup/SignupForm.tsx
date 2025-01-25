"use client";

import React, { useContext } from "react";
import Input from "../Input";
import Button from "../../ui/Button";
import { MdMailOutline, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupManager } from "@/contexts/SignupContext";
type loginType = z.infer<typeof loginValidation>;
export default function SignupForm() {
  const {
    register,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<loginType>({ resolver: zodResolver(loginValidation) });

  const context = useContext(SignupManager);
  if (!context) return;

  const { handleNextStep } = context;

  const handleSubmit = async () => {
    const result = await trigger();
    if (!result) return;
    const formData = getValues();
    console.log(formData);
    handleNextStep();
  };
  return (
    <form className="mt-6" action={handleSubmit}>
      <div className="spacey-y-4 mb-[32px] md:mb-4 md:space-y-2">
        <Input<loginType>
          icon={<MdMailOutline />}
          placeholder="Email Address"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message as string}
        />
        <Input<loginType>
          icon={<MdLock />}
          placeholder="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message as string}
        />
      </div>
      <button type="submit" className="w-full">
        <Button>Create Account</Button>
      </button>
    </form>
  );
}
