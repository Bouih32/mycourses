import Image from "next/image";
import hero from "@/images/heroImage.png";

export default function UserCard() {
  return (
    <div className="flex items-center gap-[15px]">
      <Image
        src={hero}
        alt="avatar"
        className="hidden rounded-full object-cover outline-double ring-2 ring-white md:block md:h-[40px] md:w-[40px] xl:h-[64px] xl:w-[64px]"
      />
      <div className="space-y-1 text-white">
        <h3 className="text-10lg lg:text-16lg">Jessica Wong</h3>
        <p className="text-8sm lg:text-14sm">Photographer</p>
      </div>
    </div>
  );
}
