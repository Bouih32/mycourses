import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type ChooseProps = {
  children: ReactNode;

  status?: "active" | "disabled";
  classname?: string;
};

export default function Choose({
  children,

  status,
  classname,
}: ChooseProps) {
  return (
    <span
      className={cn(
        "hover:border-main hover:text-main w-fit cursor-pointer text-nowrap rounded-[10px] border border-black60 px-2 py-1 text-center text-12sm text-black60 lg:rounded-xl lg:px-4 lg:py-2 lg:text-14sm",
        {
          "border-main text-main": status === "active",
          "pointer-events-none border-[#454849] bg-[#454849]/10 text-[#454849]":
            status === "disabled",
        },
        classname,
      )}
    >
      {children}
    </span>
  );
}
