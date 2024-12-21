import { cn } from "@/libs/utils";
import { FaCircle } from "react-icons/fa";

type SwitchType = {
  disabled?: boolean;
};

export default function Switch({ disabled }: SwitchType) {
  return (
    <label
      className={cn(
        "bg-bl relative inline-flex h-[18px] w-[28px] cursor-pointer items-center",
        { "pointer-events-none": disabled },
      )}
      htmlFor="checkBox"
    >
      <span
        className={cn("h-[14px] min-w-full rounded-lg bg-shade40", {
          "bg-black30": disabled,
        })}
      ></span>
      <input type="checkbox" value="" className="peer sr-only" id="checkBox" />
      <FaCircle
        className={cn(
          "text-dark absolute left-0 top-0 text-[18px] transition-all duration-300 ease-in-out peer-checked:left-auto peer-checked:right-0 peer-checked:text-primary",
          {
            "text-black90": disabled,
          },
        )}
      />
    </label>
  );
}
