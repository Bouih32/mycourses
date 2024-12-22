import { cn } from "@/libs/utils";
import { IoMdSearch } from "react-icons/io";

type SearchProps = {
  classname?: string;
  promo?: boolean;
};

export default function Search({ classname, promo }: SearchProps) {
  return (
    <div
      className={cn(
        "hidden w-[400px] items-center justify-between rounded-[3px] bg-white90 px-3 py-2 text-16sm text-black90 lg:flex",
        classname,
      )}
    >
      <input
        type="text"
        placeholder="Search for course"
        className={cn(
          "flex-1 bg-transparent caret-primary outline-none placeholder:text-black60",
          { "placeholder:text-white60": promo },
        )}
      />
      <IoMdSearch />
    </div>
  );
}
