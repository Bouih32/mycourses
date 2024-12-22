import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  sold?: boolean;
};

export default function Tag({ sold, children }: TagProps) {
  return (
    <span
      className={cn("rounded-[23px] bg-primary p-1 text-8lg text-white", {
        "bg-warning": sold,
      })}
    >
      {children}
    </span>
  );
}
