import { days } from "@/libs/constantes";
import { nanoid } from "nanoid";
import Day from "./Day";

export default function DayContainer() {
  let counter = 0;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-16sm text-black60 opacity-[0.996]">
        {days.map((day) => (
          <span key={nanoid()}>{day}</span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {Array.from({ length: 35 }).map((_, index) => {
          counter++;
          if (counter > 31) {
            counter = 1;
          }

          return (
            <Day
              key={nanoid()}
              status={index < 10 ? "past" : index === 10 ? "current" : null}
            >
              {counter}
            </Day>
          );
        })}
      </div>
    </section>
  );
}
