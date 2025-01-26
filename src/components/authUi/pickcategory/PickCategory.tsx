"use client";

import Button from "@/components/ui/Button";
import CategoryCard from "./CategoryCard";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { SignupManager } from "@/contexts/SignupContext";

export default function PickCategory() {
  const [selcted, setSelected] = useState<number[]>([]);
  const context = useContext(SignupManager);
  if (!context) return null;
  const { handleSignup } = context;

  const onSignup = () => {
    if (selcted.length !== 3) {
      console.log("khwawi");
      return;
    }
    handleSignup(selcted);
  };

  const handleSelect = (ele: number) => {
    setSelected((prev) => {
      if (prev.includes(ele)) {
        return prev.filter((cat) => cat !== ele);
      } else if (prev.length < 3) {
        return [...prev, ele];
      }

      return prev;
    });
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

      <Button classname="xl:w-[386px] md:w-[288px] w-full mx-auto">
        <button className="h-full w-full" onClick={onSignup}>
          Done
        </button>
      </Button>
    </section>
  );
}
