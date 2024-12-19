import { cn } from "@/libs/utils";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  test?: boolean;
  test1?: boolean;
};

export default function Button({ children, test, test1 }: ButtonProps) {
  console.log(
    cn(" text-primary text-40sm", test && "text-12lg", test1 && "text-24sm"),
  );
  return (
    <div
      className={cn(
        "text-6sm text-primary",
        test && "text-32lg",
        test1 && "text-24lg",
      )}
    >
      {children}
    </div>
  );
}
