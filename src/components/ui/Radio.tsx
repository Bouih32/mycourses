"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

type RadioProps = {
  disabled?: boolean;
};

export default function Radio({ disabled }: RadioProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "h-[18px] w-[18px] cursor-pointer",
        disabled && "pointer-events-none",
      )}
      onClick={handleClick}
    >
      {checked ? (
        <MdOutlineRadioButtonChecked className="h-full w-full text-primary" />
      ) : (
        <MdOutlineRadioButtonUnchecked
          className={cn("h-full w-full text-[#C1C2C2]", {
            "text-black90": disabled,
          })}
        />
      )}
    </div>
  );
}
