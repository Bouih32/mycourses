import Image from "next/image";
import girl from "@/images/girl.png";
import { IoMdPlayCircle } from "react-icons/io";
import { cn } from "@/libs/utils";
import Tag from "../card/Tag";

type ListChildProps = {
  large?: boolean;
  image?: boolean;
};

export default function ListChild({ large, image }: ListChildProps) {
  return (
    <div
      className={cn(
        "flex w-[387px] items-center justify-between border-b border-dark border-opacity-[0.04] px-2 py-1",
        large && "w-[363px]",
        !image && "px-3 py-2",
      )}
    >
      <div className="flex items-center gap-[3px]">
        {image && (
          <div className="h-[36px] w-[36px] overflow-hidden rounded-full">
            <Image src={girl} alt="girl" />
          </div>
        )}
        <div>
          <h3 className={cn("text-10sm text-black60", { "text-14sm": large })}>
            - Episode Name
          </h3>
          <div className="flex items-center gap-1">
            <IoMdPlayCircle className="text-black30" />
            <p className="text-8sm text-primary">Minutes Total</p>
          </div>
        </div>
      </div>
      <Tag>Completed</Tag>
    </div>
  );
}
