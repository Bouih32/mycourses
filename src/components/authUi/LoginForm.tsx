import React from "react";
import Input from "./Input";
import Button from "../ui/Button";
import { MdMailOutline, MdLock } from "react-icons/md";

export default function LoginForm() {
  return (
    <form className="mt-6">
      <div className="spacey-y-4 mb-[32px] md:mb-4 md:space-y-2">
        <Input
          icon={<MdMailOutline />}
          placeholder="Email Address"
          type="email"
        />
        <Input icon={<MdLock />} placeholder="Password" type="password" />
      </div>
      <Button>Login</Button>
    </form>
  );
}
