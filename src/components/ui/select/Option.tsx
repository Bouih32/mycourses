import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MdDone } from "react-icons/md";

type OptionProps = {
  size?: "small" | "large";
  children: ReactNode;
};

export default function Option({ size, children }: OptionProps) {
  return (
    <div
      className={cn(
        "group flex w-[133px] cursor-pointer items-center justify-between px-[14px] py-[10px] text-black90 hover:bg-primary hover:text-white",
        {
          "w-[219px] px-4 py-3 text-16sm": size === "large",
          "text-12sm": size === "small",
        },
      )}
    >
      <p>{children}</p>
      <MdDone className="text-primary group-hover:text-white" />
    </div>
  );
}
