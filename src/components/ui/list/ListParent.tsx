import Image from "next/image";
import girl from "@/images/girl.png";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { cn } from "@/libs/utils";

type ListChildProps = {
  large?: boolean;
};

export default function ListParent({ large }: ListChildProps) {
  return (
    <div
      className={cn(
        "flex w-[387px] items-center justify-between px-4 py-[6px]",
        large && "w-[363px]",
      )}
    >
      <div className="flex items-center gap-[3px]">
        <div
          className={cn(
            "h-[33px] w-[33px] overflow-hidden",
            large && "h-[39px] w-[39px]",
          )}
        >
          <Image src={girl} alt="girl" />
        </div>

        <div>
          <h3 className={cn("text-12lg text-dark", { "text-16lg": large })}>
            Chapter Number: Title
          </h3>
          <div
            className={cn(
              "flex items-center gap-1 text-10sm text-black60",
              large && "text-14sm",
            )}
          >
            <p>Amount of Episodes</p>
            <LuDot />
            <p className="text-primary">Minutes Total</p>
          </div>
        </div>
      </div>
      <IoIosArrowDown />
    </div>
  );
}
