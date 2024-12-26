import Filter from "@/components/sections/Filter";
import Instructors from "@/components/sections/Instructors";
import More from "@/components/sections/More";
import Promo from "@/components/sections/Promo";
import Trending from "@/components/sections/Trending";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import MobileFilter from "@/components/ui/MobileFilter";
import SimplePromo from "@/components/ui/promo/SimplePromo";

export default function Home() {
  return (
    <>
      <MobileFilter />
      <Container>
        <Hero />
        <Filter />
        <More />
        <Trending />
        <Instructors />
        <SimplePromo />
        <Promo />
      </Container>
    </>
  );
}
