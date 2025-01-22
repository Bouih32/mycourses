"use client";

import Image from "next/image";
import placeholder from "@/images/categoryImage.png";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/libs/utils";

export default function CategoryCard() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div
      onClick={handleClick}
      className={cn(
        "before:bg-categoryGrad relative h-[122px] w-[160px] cursor-pointer overflow-hidden rounded-[3px] border-main transition-all duration-75 ease-in before:absolute before:bottom-0 before:left-0 before:h-full before:w-full hover:border-[2px] md:h-[140px] md:w-[211px] xl:w-[184px]",
        clicked && "border-[2px]",
      )}
    >
      <Image
        src={placeholder}
        alt="category"
        className="h-full w-full object-fill object-center"
      />
      <div className="absolute bottom-0 left-0 w-full pb-2 text-center">
        <h2 className="z-50 text-12lg text-white90 md:text-16lg">Design</h2>
      </div>
      {clicked && (
        <FaCheckCircle className="absolute right-2 top-2 text-main" />
      )}
    </div>
  );
}
