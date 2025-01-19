import girl from "@/images/girl.png";
import Image from "next/image";
import Button from "../Button";

export default function PromoSquare() {
  return (
    <section className="relative flex w-[335px] overflow-hidden rounded-[3px] text-white lg:w-[387px]">
      <div className="bg-main z-50 w-[143px] space-y-[32px] p-[14px] lg:w-[165px] lg:pb-6 lg:pl-5 lg:pt-4">
        <div className="space-y-1">
          <h3 className="text-12lg">WEBINAR</h3>
          <p className="text-12sm">August 16, 2020</p>
        </div>
        <div className="z-50 space-y-2">
          <h3 className="text-nowrap text-32lg">
            Film Maker <br />
            Skillset for <br /> Beginner.
          </h3>
          <p className="text-16sm">Kitani Sarasvati</p>
        </div>
        <Button
          status="enabled"
          classname="bg-transparent text-white border-white rounded-[3px]"
        >
          Get it Now
        </Button>
      </div>
      <Image
        src={girl}
        alt="girl smiling"
        className="absolute right-0 top-0 z-10 h-full w-[192px] lg:w-[222px]"
      />
    </section>
  );
}
