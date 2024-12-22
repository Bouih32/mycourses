import { cn } from "@/libs/utils";
import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  sold?: boolean;
  rounded?: boolean;
};

export default function Tag({ sold, children, rounded }: TagProps) {
  return (
    <span
      className={cn("bg-primary p-1 text-8lg text-white", {
        "bg-warning": sold,
        "rounded-[23px]": rounded,
      })}
    >
      {children}
    </span>
  );
}
