import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="laptop:max-w-[1200px] laptop:gap-10 mx-auto flex w-screen flex-col gap-6 md:max-w-[909px]">
      {children}
    </div>
  );
}
