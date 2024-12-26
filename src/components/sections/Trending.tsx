import { nanoid } from "nanoid";
import SubTitle from "../ui/typography/SubTitle";
import Title from "../ui/typography/Title";
import Card from "../ui/card/Card";
import { trendingData1, trendingData2 } from "@/libs/constantes";

export default function Trending() {
  return (
    <section className="space-y-6 laptop:space-y-10">
      <section className="space-y-4 pl-5 lg:space-y-5 lg:pl-0">
        <div className="space-y-[2px] lg:space-y-1">
          <Title>Trending Course</Title>
          <SubTitle>
            We know the best things for You. Top picks for You.
          </SubTitle>
        </div>
        <div className="flex flex-nowrap gap-4 overflow-hidden lg:gap-5">
          {trendingData1.map((ele) => (
            <Card data={ele} key={nanoid()} />
          ))}
        </div>
      </section>
      <section className="hidden space-y-4 pl-5 lg:block lg:space-y-5 lg:pl-0">
        <div className="flex flex-nowrap gap-4 overflow-hidden lg:gap-5">
          {trendingData2.map((ele) => (
            <Card data={ele} key={nanoid()} />
          ))}
        </div>
      </section>
    </section>
  );
}
