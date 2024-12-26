import Image from "next/image";
import logo from "@/images/logo.png";
import avatar from "@/images/avatar.png";
import Search from "./Search";
import { MdKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaBell, FaRegBell } from "react-icons/fa6";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";

type HeaderProps = {
  logged?: boolean;
};

export default function Header({ logged }: HeaderProps) {
  return (
    <Container>
      <header className="mb-6 flex items-center justify-between px-4 py-[9.4px] text-16sm text-dark sm:px-0 md:mb-10 lg:py-[14px] xl:py-2">
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
          <Link href="#" className="mr-1 hidden xl:block">
            Become Instructor
          </Link>
          <MdShoppingCart className="text-black60 lg:text-[24px] lg:text-dark" />
          <FaBell className="text-black60 lg:hidden" />
          {!logged ? (
            <div className="hidden items-center gap-4 lg:flex lg:gap-[18px]">
              <Button status="enabled" classname="text-black90 border-black90 ">
                Login
              </Button>
              <Button icon>Sign Up</Button>
            </div>
          ) : (
            <div className="flex items-center gap-4 lg:gap-[18px]">
              <FaRegBell className="text-[24px]" />
              <Image
                src={avatar}
                alt="avatar"
                height={36}
                width={36}
                className="rounded-full"
              />
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}
