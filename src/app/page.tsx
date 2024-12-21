import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";

export default function Home() {
  return (
    <div className="flex h-screen flex-col place-content-center space-y-10">
      <Button>Hello</Button>
      <Button size="large">Hello</Button>
      <Button size="small">Hello</Button>
      <Button size="large" status="disabled">
        Hello
      </Button>
      <Switch />
    </div>
  );
}
