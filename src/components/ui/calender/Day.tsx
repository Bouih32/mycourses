import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type DayProps = {
  children: ReactNode;
  status?: "past" | "current" | null;
};

export default function Day({ children, status }: DayProps) {
  return (
    <div
      className={cn(
        "hover:bg-main h-[32px] w-[32px] cursor-pointer rounded-[3px] px-2 py-1 text-center text-16sm text-black60 hover:text-16lg hover:text-white",
        {
          "text-black30": status === "past",
          "text-16lg text-black90": status === "current",
        },
      )}
    >
      {children}
    </div>
  );
}
