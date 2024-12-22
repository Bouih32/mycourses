import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="hidden w-[400px] items-center justify-between rounded-[3px] bg-white90 px-3 py-2 text-16sm text-black90 lg:flex">
      <input
        type="text"
        placeholder="Search for course"
        className="flex-1 bg-transparent caret-primary outline-none placeholder:text-black60"
      />
      <IoMdSearch />
    </div>
  );
}
