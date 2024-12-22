import instructor from "@/images/expert.png";
import Image from "next/image";

export default function InstructorCard() {
  return (
    <div className="before:bg-expertGradient relative h-[400px] w-[285px] overflow-hidden rounded-[18px] before:absolute before:z-20 before:h-full before:w-full">
      <Image
        src={instructor}
        alt="instructor"
        className="z-10 h-full w-full object-cover"
      />
      <div className="absolute bottom-[16px] left-[33px] z-50 space-y-1 text-center text-white">
        <h3 className="text-24lg">Alexander Bastian</h3>
        <p className="text-16sm">Expert Mobile Engineer</p>
      </div>
    </div>
  );
}
