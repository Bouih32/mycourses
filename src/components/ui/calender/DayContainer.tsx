import { days } from "@/libs/constantes";
import { nanoid } from "nanoid";
import Day from "./Day";
import { getDate } from "@/libs/utils";

export default function DayContainer() {
  const { day, firstDayOfMonth, daysInMonth } = getDate();
  let counter = 1;

  return (
    <section className="flex flex-col gap-4">
      <div className="grid grid-cols-7 text-16sm text-black60 opacity-[0.996]">
        {days.map((dayName) => (
          <span key={nanoid()} className="text-center">
            {dayName}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {Array.from({ length: firstDayOfMonth + 1 }).map((_, index) => (
          <Day key={nanoid()} status="past">
            {daysInMonth - firstDayOfMonth + index}
          </Day>
        ))}

        {Array.from({ length: 35 - (firstDayOfMonth + 1) }).map(() => {
          const currentDay = counter++;
          return (
            <Day
              key={nanoid()}
              status={
                currentDay < day
                  ? "past"
                  : currentDay === day
                    ? "current"
                    : null
              }
            >
              {currentDay}
            </Day>
          );
        })}
      </div>
    </section>
  );
}
