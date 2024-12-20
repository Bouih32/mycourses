import Radio from "@/components/ui/Radio";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center space-y-10">
      <Radio />
      <Radio disabled />
    </div>
  );
}
