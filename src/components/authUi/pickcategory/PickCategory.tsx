"use client";

import Button from "@/components/ui/Button";
import CategoryCard from "./CategoryCard";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function PickCategory() {
  const [selcted, setSelected] = useState<number[]>([]);
  const handleSelect = (ele: number) => {
    setSelected((prev) => {
      if (prev.includes(ele)) {
        // If the element is already selected, remove it
        return prev.filter((cat) => cat !== ele);
      } else if (prev.length < 3) {
        // If the length is less than 3, add the element
        return [...prev, ele];
      }
      // Otherwise, return the previous state (no changes)
      return prev;
    });

    console.log(selcted);
  };

  return (
    <section className="space-y-6 px-5 py-6 md:w-[944px] xl:w-[834px] xl:space-y-[32px] xl:py-10">
      <p className="text-center text-16lg md:text-20lg">
        Pick 3 categories you want to explore
      </p>
      <section className="grid grid-cols-2 gap-[15px] md:grid-cols-4 md:gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <CategoryCard
            key={nanoid()}
            handleSelect={handleSelect}
            index={index}
            selcted={selcted}
          />
        ))}
      </section>
      <Button classname="xl:w-[386px] md:w-[288px] w-full mx-auto">Done</Button>
    </section>
  );
}
