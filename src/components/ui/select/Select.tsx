import { ReactNode } from "react";

type SelectProps = {
  children: ReactNode;
};

export default function Select({ children }: SelectProps) {
  return (
    <div className="overflow-hidden rounded-[18px] bg-white">{children}</div>
  );
}
