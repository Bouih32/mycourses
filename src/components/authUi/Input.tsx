import { ReactElement } from "react";

type InputProps = {
  icon: ReactElement;
  placeholder: string;
  type: string;
};

export default function Input({ icon, placeholder, type }: InputProps) {
  return (
    <div className="flex items-center justify-between border-b pb-[9px] pt-[15px] placeholder:text-black60 md:border-none md:border-black30 md:bg-white90 md:px-3 md:py-2.5">
      <input
        type={type}
        name="email"
        id="email"
        className="w-full rounded-sm bg-transparent caret-main outline-none placeholder:text-black30"
        placeholder={placeholder}
      />
      <div className="text-[21px] text-black60"> {icon}</div>
    </div>
  );
}
