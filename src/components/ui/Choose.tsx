import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type ChooseType = {
  children: ReactNode;
  small?: boolean;
  status?: "active" | "disabled";
};

export default function Choose({ children, small, status }: ChooseType) {
  return (
    <span
      className={cn(
        "w-fit rounded-xl border border-black60 px-4 py-2 text-center text-14sm text-black60",
        {
          "text-12sm rounded-[10px] px-2 py-1": small,
          "border-primary text-primary": status === "active",
          "pointer-events-none border-[#454849] bg-[#454849]/10 text-[#454849]":
            status === "disabled",
        },
      )}
    >
      {children}
    </span>
  );
}
