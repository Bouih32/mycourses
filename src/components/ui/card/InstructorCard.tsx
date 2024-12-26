import { InstructorType } from "@/libs/types";
import Image from "next/image";
type InstructorProps = {
  data: InstructorType;
};

export default function InstructorCard({ data }: InstructorProps) {
  return (
    <div className="relative min-w-[147px] cursor-pointer overflow-hidden before:left-0 before:top-0 before:z-50 before:h-full before:w-full before:bg-expertGradient lg:rounded-[18px] lg:before:absolute">
      <Image
        src={data.cover}
        alt="instructor"
        className="z-10 h-[269px] min-w-[147px] rounded-[3px] object-cover lg:h-[400px] lg:w-[285px] lg:rounded-none"
      />
      <div className="bottom-[16px] left-[50%] z-50 space-y-[2px] text-start lg:absolute lg:-translate-x-[50%] lg:space-y-1 lg:text-center">
        <h3 className="text-nowrap text-16sm text-black lg:text-24lg lg:text-white">
          {data.name}
        </h3>
        <p className="text-14sm text-black60 lg:text-16sm lg:text-white">
          {data.job}
        </p>
      </div>
    </div>
  );
}
