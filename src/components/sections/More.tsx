import { nanoid } from "nanoid";
import Card from "../ui/card/Card";
import SubTitle from "../ui/typography/SubTitle";
import Title from "../ui/typography/Title";
import { moreSection } from "@/libs/constantes";

export default function More() {
  return (
    <section className="space-y-4 pl-5 lg:space-y-5 lg:pl-0">
      <div className="space-y-[2px] lg:space-y-1">
        <Title>More from Kitani Studio</Title>
        <SubTitle>We know the best things for You. Top picks for You.</SubTitle>
      </div>
      <div className="flex flex-nowrap gap-4 overflow-hidden lg:gap-5">
        {moreSection.map((ele) => (
          <Card key={nanoid()} data={ele} />
        ))}
      </div>
    </section>
  );
}
