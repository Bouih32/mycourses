import { ReactNode } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
type MonthProps = { children: ReactNode };

export default function Month({ children }: MonthProps) {
  return (
    <div className="flex items-center justify-between text-16lg text-[#080E2F]">
      <IoIosArrowBack />
      <h3 className="text-black"> {children}</h3>
      <IoIosArrowForward />
    </div>
  );
}
