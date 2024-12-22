import Image from "next/image";
import rhone from "@/images/rhone.png";
import Button from "../Button";

export default function AdvancedPromo() {
  return (
    <section className="relative w-[1200px] space-y-6 overflow-hidden rounded-xl bg-[#1B283F] p-[60px]">
      <Image
        src={rhone}
        alt="decore"
        className="absolute right-0 top-0 h-full"
      />
      <div className="space-y-2">
        <h3 className="text-32lg text-white">Join and get amazing discount</h3>
        <p className="text-24sm text-white60">
          With our responsive themes and mobile and desktop apps
        </p>
      </div>
      <Button>Join Klevr</Button>
    </section>
  );
}
