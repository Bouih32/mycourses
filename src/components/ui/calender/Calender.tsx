import { ReactNode } from "react";

type CalenderProps = { children: ReactNode };

export default function Calender({ children }: CalenderProps) {
  return (
    <div className="max-w-[344px] space-y-6 rounded-[18px] bg-white p-6">
      {children}
    </div>
  );
}
