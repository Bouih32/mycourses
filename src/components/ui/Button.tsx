import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MdTimelapse } from "react-icons/md";

type ButtonProps = {
  children?: ReactNode;
  size?: "large" | "small";
  icon?: boolean;
  status?: "enabled" | "disabled";
};

export default function Button({ children, icon, size, status }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-[14px] bg-primary px-[18px] py-2.5 text-16lg text-white hover:bg-shade80",
        {
          "rounded-[18px] px-6 py-3 text-20lg": size === "large",
          "rounded-xl px-4 py-2 text-12lg": size === "small",
          "border border-black60 bg-white text-black60 hover:bg-white":
            status === "enabled",
          "bg-black30 text-black30 hover:bg-black30": status === "disabled",
        },
      )}
    >
      {icon && <MdTimelapse />}
      {children}
    </button>
  );
}
