import { cn } from "@/libs/utils";
import { ReactElement, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  icon?: ReactElement;
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
    <div
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-main px-4 py-2 text-12lg text-white transition-all duration-200 ease-in-out hover:bg-shade80 lg:rounded-[14px] lg:px-[18px] lg:py-2.5 lg:text-16lg xl:rounded-[18px] xl:px-6 xl:py-3 xl:text-20lg",
        {
          "border border-black60 bg-white text-black60 hover:bg-white90":
            status === "enabled",
          "pointer-events-none bg-black30 text-black30 hover:bg-black30":
            status === "disabled",
        },
        classname,
      )}
    >
      <div className="text-[21px]"> {icon ? icon : null}</div>

      {children}
    </div>
  );
}
