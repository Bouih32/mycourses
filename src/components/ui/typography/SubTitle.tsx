import { ReactNode } from "react";

export default function SubTitle({ children }: { children: ReactNode }) {
  return <p className="laptop:text-16sm text-14sm text-black60">{children}</p>;
}
