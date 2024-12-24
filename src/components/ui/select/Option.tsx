import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MdDone } from "react-icons/md";

type OptionProps = {
  children: ReactNode;
};

export default function Option({ children }: OptionProps) {
  return (
    <div
      className={cn(
        "group flex w-[133px] cursor-pointer items-center justify-between px-[14px] py-[10px] text-12sm text-black90 hover:bg-primary hover:text-white lg:text-14sm xl:w-[219px] xl:px-4 xl:py-3 xl:text-16sm",
      )}
    >
      <p>{children}</p>
      <MdDone className="text-primary group-hover:text-white" />
    </div>
  );
}
