import { FaRegUser } from "react-icons/fa6";

export default function CardHeader() {
  return (
    <div className="space-y-1 text-14sm">
      <h2 className="text-16lg">Adobe Illustrator Scretch Course</h2>
      <div className="flex items-center gap-1">
        <FaRegUser className="text-[12px] text-black60" />
        <p className="text-primary">Kitani Studio</p>
      </div>
      <p className="line-clamp-3 text-black90">
        More than 8yr Experience as Illustrator. Learn how to becoming
        professional Illustrator Now...
      </p>
    </div>
  );
}
