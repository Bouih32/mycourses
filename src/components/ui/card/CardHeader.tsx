import { FaRegUser } from "react-icons/fa6";
type CardHeaderProps = {
  title: string;
};

export default function CardHeader({ title }: CardHeaderProps) {
  return (
    <div className="space-y-1 text-10sm lg:text-14sm">
      <h2 className="text-12lg lg:text-16lg">{title}</h2>
      <div className="flex items-center gap-1">
        <FaRegUser className="text-[10px] text-black60 lg:text-[12px]" />
        <p className="text-main">Kitani Studio</p>
      </div>
      <p className="line-clamp-3 text-black90">
        More than 8yr Experience as Illustrator. Learn how to becoming
        professional Illustrator Now...
      </p>
    </div>
  );
}
