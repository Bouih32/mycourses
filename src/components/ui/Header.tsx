import Image from "next/image";
import logo from "@/images/logo.png";
import Search from "./Search";
import { MdKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-[9.4px] text-16sm text-dark lg:px-6 lg:py-[10px] xl:px-[120px] xl:py-2">
      <div className="flex items-center justify-center gap-[7px] lg:gap-[16px] xl:gap-[31.41px]">
        <IoMenu className="text-[24px] font-bold text-primary lg:hidden" />
        <Image
          src={logo}
          alt="logo"
          height={37.2}
          width={131}
          className="lg:w-[141.016px] xl:h-[43px] xl:w-[152px]"
        />
        <div className="hidden cursor-pointer items-center gap-[5px] lg:flex">
          <span>Browse</span>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <Search />

      <div className="flex items-center gap-4 lg:gap-[18px]">
        <Link href="#" className="mr-1 hidden lg:block">
          Become Instructor
        </Link>
        <MdShoppingCart className="text-black60 lg:text-[24px] lg:text-dark" />
        <FaBell className="text-black60 lg:hidden" />
        <Button
          status="enabled"
          size="small"
          classname="text-black90 border-black90 hidden lg:flex"
        >
          Login
        </Button>
        <Button icon size="small" classname="hidden lg:flex">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
