import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MdTimelapse } from "react-icons/md";

type ButtonProps = {
  children?: ReactNode;
  icon?: boolean;
  status?: "enabled" | "disabled";
  classname?: string;
};

export default function Button({
  children,
  icon,
  status,
  classname,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-12lg text-white transition-all duration-200 ease-in-out hover:bg-shade80 lg:rounded-[14px] lg:px-[18px] lg:py-2.5 lg:text-16lg xl:rounded-[18px] xl:px-6 xl:py-3 xl:text-20lg",
        {
          "border border-black60 bg-white text-black60 hover:bg-white90":
            status === "enabled",
          "pointer-events-none bg-black30 text-black30 hover:bg-black30":
            status === "disabled",
        },
        classname,
      )}
    >
      {icon && <MdTimelapse />}
      {children}
    </button>
  );
}
