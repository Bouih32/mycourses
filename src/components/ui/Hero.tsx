import decor from "@/images/heroDecor.png";
import hero from "@/images/heroImage.png";
import Button from "./Button";
import Image from "next/image";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function Hero() {
  return (
    <section className="relative flex h-[126px] w-full overflow-hidden md:h-[400px] lg:rounded-2xl">
      <div className="absolute left-0 top-[50%] z-40 hidden w-full -translate-y-[50%] justify-between text-white lg:flex">
        <div className="cursor-pointer bg-white/20 px-[7px] py-[30px]">
          <GoChevronLeft />
        </div>
        <div className="cursor-pointer bg-[#FFFFFF33] px-[7px] py-[30px]">
          <GoChevronRight />
        </div>
      </div>
      <div className="relative w-[130px] bg-primary text-white md:w-[250px] xl:w-[455px]">
        <Image
          src={decor}
          alt="avatar"
          className="absolute z-30 hidden h-full w-fit lg:block"
        />
        <div className="absolute bottom-3 left-[18px] top-[17px] z-50 space-y-[7px] text-nowrap md:left-[63px] md:top-[76px] md:space-y-10">
          <div className="">
            <h1 className="mb:mb-2 mb-1 text-16lg md:text-48lg">
              Learn something <br />
              new everyday.
            </h1>
            <p className="text-8sm md:text-16sm">
              Become professionals and ready to join the world.
            </p>
          </div>
          <Button classname="hidden lg:block bg-white text-primary hover:text-white">
            Explore Photography
          </Button>
          <Button
            status="enabled"
            classname="bg-transparent text-white border-white rounded-none lg:hidden"
          >
            Explore Photography
          </Button>
        </div>
      </div>
      <div className="relative grid flex-1 pb-3 pr-2 lg:pb-[46px] lg:pr-6 xl:pb-[34px] xl:pr-[25px]">
        <Image
          src={hero}
          alt="avatar"
          className="absolute z-10 h-full w-full"
        />
        <div className="z-50 flex items-center self-end justify-self-end lg:gap-[145px] xl:gap-[161px]">
          <div className="flex items-center gap-[15px]">
            <Image
              src={hero}
              alt="avatar"
              className="hidden rounded-full object-cover outline-double ring-2 ring-white md:block md:h-[40px] md:w-[40px] xl:h-[64px] xl:w-[64px]"
            />
            <div className="space-y-1 text-white">
              <h3 className="text-10lg lg:text-16lg">Jessica Wong</h3>
              <p className="text-8sm lg:text-14sm">Photographer</p>
            </div>
          </div>
          <div className="hidden space-y-1 text-8sm text-white lg:block">
            <p className="lg:text-14sm xl:text-16sm">
              Winner Photo 2017 Awwards
            </p>
            <p className="lg:text-10sm xl:text-16sm">Joined Klevr since 2006</p>
          </div>
        </div>
      </div>
    </section>
  );
}
