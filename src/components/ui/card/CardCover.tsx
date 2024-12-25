import Image from "next/image";
import placeholder from "@/images/placeholder.png";
import { IoMdMore, IoMdHeart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

import Tag from "./Tag";
import ProgressBar from "./ProgressBar";

type CardCoverProps = {
  type?: "wishlist" | "watch";
};

export default function CardCover({ type }: CardCoverProps) {
  return (
    <div className="relative h-[161px] w-[285px]">
      <Image
        src={placeholder}
        alt="cover"
        className="h-full w-full rounded-[3px] object-cover lg:rounded-[23px]"
      />
      <div className="absolute left-[10px] top-[8px] flex items-center gap-[8.5px]">
        <Tag rounded>Best Seller</Tag>
        <Tag sold rounded>
          20% OFF
        </Tag>
      </div>
      {type && (
        <div className="absolute right-[12px] top-[12px] grid h-6 w-6 cursor-pointer place-content-center rounded-full bg-white">
          {type === "watch" ? (
            <IoMdMore className="text-black60" />
          ) : (
            <IoMdHeart className="text-error" />
          )}
        </div>
      )}
      {!type && (
        <FaRegUser className="absolute bottom-[12px] right-[12px] text-white" />
      )}
      {type === "watch" && <ProgressBar />}
    </div>
  );
}
