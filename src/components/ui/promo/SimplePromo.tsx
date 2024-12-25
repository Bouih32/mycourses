import Image from "next/image";
import aare from "@/images/aare.png";
import Search from "../Search";
import Button from "../Button";

export default function SimplePromo() {
  return (
    <section className="relative hidden items-center justify-between gap-[78px] overflow-hidden rounded-xl bg-[#2273D1] px-[60px] py-[51px] lg:flex xl:gap-[55px]">
      <Image
        src={aare}
        alt="decore"
        className="absolute right-0 top-0 h-full"
      />
      <div className="space-y-1 text-white">
        <h3 className="text-32lg">Join and get amazing discount</h3>
        <p className="hidden text-24sm text-white60 xl:block">
          With our responsive themes and mobile and desktop apps
        </p>
      </div>
      <div className="z-50 flex gap-4">
        <Search classname="bg-white30 text-white w-[243px]" promo />
        <Button>Subscribe</Button>
      </div>
    </section>
  );
}
