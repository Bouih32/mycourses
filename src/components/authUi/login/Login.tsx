import Image from "next/image";
import logo from "@/images/logo.png";
import LoginForm from "./LoginForm";
import SideImage from "../SideImage";
import OtherMethodes from "../OtherMethodes";

export default function Login() {
  return (
    <section className="grid h-full w-full md:w-[800px] md:grid-cols-2">
      <SideImage />
      <section className="p-5 pt-[34px] text-16sm md:p-6">
        <div className="space-y-2">
          <Image
            src={logo}
            alt="logo"
            height={34}
            width={119}
            className="hidden object-contain md:block md:w-[123px] xl:h-[34px] xl:w-[119px]"
          />
          <p className="text-black60">
            Join us and get more benefits. We promise to keep your data safely.
          </p>
        </div>
        <LoginForm />
        <OtherMethodes />
        <p className="mt-6 text-center text-14sm text-black60">
          Need an Account?
          <span className="cursor-pointer text-12lg text-main">Sign Up</span>
        </p>
      </section>
    </section>
  );
}
