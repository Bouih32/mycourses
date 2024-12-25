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
      className={cn("w-fit rounded-[2px] bg-primary p-1 text-8lg text-white", {
        "bg-warning": sold,
        "lg:rounded-[23px]": rounded,
      })}
    >
      {children}
    </span>
  );
}
