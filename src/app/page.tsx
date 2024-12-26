import Card from "@/components/ui/card/Card";
import InstructorCard from "@/components/ui/card/InstructorCard";
import Choose from "@/components/ui/Choose";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import PromoSquare from "@/components/ui/promo/PromoSquare";
import SimplePromo from "@/components/ui/promo/SimplePromo";
import SubTitle from "@/components/ui/typography/SubTitle";
import Title from "@/components/ui/typography/Title";
import { nanoid } from "nanoid";

export default function Home() {
  return (
    <Container>
      <Hero />

      <section className="mt-[24px] hidden space-x-2 px-5 sm:px-0 lg:block">
        <Choose status="active">Adobe Illustrator</Choose>
        {Array.from({ length: 5 }).map(() => (
          <Choose key={nanoid()}>Adobe Illustrator</Choose>
        ))}
      </section>
      <section className="space-y-4 pl-5 lg:space-y-5 lg:pl-0">
        <div className="space-y-[2px] lg:space-y-1">
          <Title>More from Kitani Studio</Title>
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
      <section className="space-y-4 pl-5 lg:space-y-5 lg:pl-0">
        <div className="space-y-[2px] lg:space-y-1">
          <Title>Trending Course</Title>
          <SubTitle>
            We know the best things for You. Top picks for You.
          </SubTitle>
        </div>
        <div className="flex flex-nowrap gap-4 overflow-hidden lg:gap-5">
          {Array.from({ length: 4 }).map(() => (
            <InstructorCard key={nanoid()} />
          ))}
        </div>
      </section>
      <SimplePromo />
      <section className="mx-auto mb-10 lg:hidden">
        <PromoSquare />
      </section>
    </Container>
  );
}
