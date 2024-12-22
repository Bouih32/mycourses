import Image from "next/image";
import rhone from "@/images/rhone.png";
import Tag from "../card/Tag";
import Choose from "../Choose";

export default function PromoSolid() {
  return (
    <section className="relative h-[631px] w-[387px] overflow-hidden rounded-[18px] bg-[#1B283F] px-5 pt-10">
      <Image
        src={rhone}
        alt="decore"
        className="absolute bottom-0 right-0 h-[348px]"
      />
      <div className="flex flex-col gap-1">
        <Tag>WEBINAR</Tag>
        <h3 className="text-20sm text-white90">Ana Kursova</h3>
        <p className="text-32lg text-white">
          Masterclass in Design Thinking, Innovation & Creativity
        </p>
        <Choose classname="border-secondary text-secondary">Learn More</Choose>
      </div>
    </section>
  );
}
