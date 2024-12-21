import Switch from "@/components/ui/Switch";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center space-y-10">
      <Switch />
      <Switch disabled />
    </div>
  );
}
