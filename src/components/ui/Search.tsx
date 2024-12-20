import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="flex items-center justify-between rounded-[3px] bg-white90 px-3 py-2 text-16sm text-black90">
      <input
        type="text"
        placeholder="Search for course"
        className="bg-transparent caret-primary outline-none placeholder:text-black60"
      />
      <IoMdSearch />
    </div>
  );
}
