import instructor from "@/images/expert.png";
import Image from "next/image";

export default function InstructorCard() {
  return (
    <div className="relative overflow-hidden lg:rounded-[18px]">
      <Image
        src={instructor}
        alt="instructor"
        className="z-10 h-[269px] w-[147px] rounded-[3px] object-cover before:absolute before:z-20 before:h-full before:w-full before:bg-expertGradient lg:h-[400px] lg:w-[285px] lg:rounded-none"
      />
      <div className="bottom-[16px] left-[33px] z-50 space-y-[2px] text-start lg:absolute lg:space-y-1 lg:text-center">
        <h3 className="text-16sm text-black lg:text-24lg lg:text-white">
          Alexander Bastian
        </h3>
        <p className="text-14sm text-black60 lg:text-16sm lg:text-white">
          Expert Mobile Engineer
        </p>
      </div>
    </div>
  );
}
