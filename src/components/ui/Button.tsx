import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  test?: boolean;
  test1?: boolean;
};

export default function Button({ children, test, test1 }: ButtonProps) {
  console.log(
    clsx(" text-primary", { "text-large": test, "text-medium": test1 }),
  );
  return (
    <div
      className={clsx("text-primary", {
        "text-large": test,
        "text-mediumBold": test1,
      })}
    >
      {children}
    </div>
  );
}
