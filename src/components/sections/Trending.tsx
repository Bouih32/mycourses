import { nanoid } from "nanoid";
import SubTitle from "../ui/typography/SubTitle";
import Title from "../ui/typography/Title";
import Card from "../ui/card/Card";

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
          {Array.from({ length: 4 }).map(() => (
            <Card key={nanoid()} />
          ))}
        </div>
      </section>
      <section className="hidden space-y-4 pl-5 lg:block lg:space-y-5 lg:pl-0">
        <div className="flex flex-nowrap gap-4 overflow-hidden lg:gap-5">
          {Array.from({ length: 4 }).map(() => (
            <Card key={nanoid()} />
          ))}
        </div>
      </section>
    </section>
  );
}
