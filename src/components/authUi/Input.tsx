import { MdMailOutline } from "react-icons/md";

export default function Input() {
  return (
    <div className="flex items-center justify-between border-b pb-[9px] pt-[15px] placeholder:text-black60 md:border-none md:border-black30 md:bg-white90 md:px-3 md:py-2.5">
      <input
        type="email"
        name="email"
        id="email"
        className="w-full rounded-sm bg-transparent caret-main outline-none placeholder:text-black30"
        placeholder="Email"
      />
      <MdMailOutline className="text-[21px] text-black60" />
    </div>
  );
}
