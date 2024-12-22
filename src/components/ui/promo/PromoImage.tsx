import Image from "next/image";
import promo from "@/images/promo.png";
import Tag from "../card/Tag";

export default function PromoImage() {
  return (
    <section className="before:bg-promoImage relative h-[631px] w-[387px] overflow-hidden rounded-[18px] before:absolute before:z-20 before:h-full before:w-full">
      <Image
        src={promo}
        alt="girl smiling"
        className="z-10 h-full w-full object-cover"
      />
      <div className="absolute bottom-10 left-5 z-50 space-y-1">
        <Tag>WEBINAR</Tag>
        <h3 className="text-20sm text-white90">Ana Kursova</h3>
        <p className="text-32lg text-white">
          Masterclass in Design Thinking, Innovation & Creativity
        </p>
      </div>
    </section>
  );
}
