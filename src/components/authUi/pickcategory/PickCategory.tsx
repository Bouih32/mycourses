import Button from "@/components/ui/Button";

export default function PickCategory() {
  return (
    <section className="space-y-6 px-5 py-6 xl:space-y-[32px] xl:py-10">
      <p className="text-center text-16lg md:text-20lg">
        Pick 3 categories you want to explore
      </p>
      <Button>Done</Button>
    </section>
  );
}
