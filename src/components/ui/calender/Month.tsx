import { getDate } from "@/libs/utils";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Month() {
  const { monthName, year } = getDate();
  return (
    <div className="flex items-center justify-between text-16lg text-[#080E2F]">
      <IoIosArrowBack className="cursor-pointer" />
      <h3 className="text-black">
        {monthName} {year}
      </h3>
      <IoIosArrowForward className="cursor-pointer" />
    </div>
  );
}
