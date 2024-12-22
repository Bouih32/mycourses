import Image from "next/image";
import girl from "@/images/girl.png";
import { MdAssessment } from "react-icons/md";

export default function ListGraph() {
  return (
    <div className="flex w-[387px] items-center justify-between px-4 py-[6px]">
      <div className="flex items-center gap-2">
        <div className="h-[42px] w-[42px] overflow-hidden rounded-[15px]">
          <Image src={girl} alt="girl" />
        </div>

        <div>
          <h3 className="text-16sm text-dark">Title Here</h3>

          <p className="text-14sm text-black60">Amount of Episodes</p>
        </div>
      </div>
      <MdAssessment className="text-[24px] text-[#080E2F]" />
    </div>
  );
}
