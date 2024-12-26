import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <h2 className="laptop:text-20lg text-16lg">{children}</h2>;
}
