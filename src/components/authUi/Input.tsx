import { cn } from "@/libs/utils";
import { ReactElement } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: string | undefined;
  name: Path<T>;
  placeholder: string;
  type: string;
  icon: ReactElement;
};

export default function Input<T extends FieldValues>({
  icon,
  placeholder,
  name,
  type,
  register,
  error,
}: InputProps<T>) {
  return (
    <section className="">
      <div
        className={cn(
          "flex items-center justify-between border-b border-black30 pb-[9px] pt-[15px] placeholder:text-black60 md:bg-white90 md:px-3 md:py-2.5",
          { "border-error md:border-b": error },
          { "md:border-none": !error },
        )}
      >
        <input
          type={type}
          {...register(name)}
          id={name}
          className="w-full rounded-sm bg-transparent caret-main outline-none placeholder:text-black30"
          placeholder={placeholder}
        />
        <div className="text-[21px] text-black60"> {icon}</div>
      </div>
      {error && <p className="text-error">{error}</p>}
    </section>
  );
}
