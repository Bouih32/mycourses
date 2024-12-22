import { nanoid } from "nanoid";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

export default function CardFooter() {
  return (
    <div className="space-y-1 text-black60">
      <div className="flex items-center gap-[2px] text-secondary">
        {Array.from({ length: 4 }).map(() => (
          <IoMdStar key={nanoid()} />
        ))}
        <IoMdStarHalf />
        <span className="text-14sm">(1.2K)</span>
      </div>
      <div className="flex items-center gap-1">
        <h4 className="text-20lg text-black">$24.92</h4>
        <span className="text-16sm">(1.2K)</span>
      </div>
    </div>
  );
}
