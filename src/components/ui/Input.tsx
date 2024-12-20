import { cn } from "@/libs/utils";
import { MdTimelapse } from "react-icons/md";

type InputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};

export default function Input({
  label,
  placeholder,
  error,
  disabled,
}: InputProps) {
  return (
    <section className="space-y-1 text-14sm">
      <div
        className={cn("border-b border-black30 pb-[6px]", {
          "border-error": error,
          "text-black30": disabled,
        })}
      >
        {placeholder && (
          <h2 className={cn("text-black60", { "text-black30": disabled })}>
            {label}
          </h2>
        )}
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder={placeholder ?? label}
            className={cn("text-16sm text-black90 caret-primary outline-none", {
              "placeholder:text-black90": placeholder,
              "text-black30 placeholder:text-black30": disabled,
            })}
          />
          <MdTimelapse className="text-black30" />
        </div>
      </div>
      {error && <p className="text-error">{error}</p>}
    </section>
  );
}
