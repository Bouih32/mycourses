import React from "react";
import Title from "../ui/typography/Title";
import SubTitle from "../ui/typography/SubTitle";
import InstructorCard from "../ui/card/InstructorCard";
import { nanoid } from "nanoid";
import { instructors } from "@/libs/constantes";

export default function Instructors() {
  return (
    <section className="space-y-4 pl-5 lg:space-y-5 lg:pl-0">
      <div className="space-y-[2px] lg:space-y-1">
        <Title>Popular Instructor</Title>
        <SubTitle>We know the best things for You. Top picks for You.</SubTitle>
      </div>
      <div className="flex flex-nowrap gap-4 overflow-hidden lg:gap-5">
        {instructors.map((ele) => (
          <InstructorCard data={ele} key={nanoid()} />
        ))}
      </div>
    </section>
  );
}
