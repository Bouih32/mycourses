import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="space-y-4">
      <Button icon status="disabled">
        Hello
      </Button>
      <Button size="small" icon>
        Hello
      </Button>
      <Button size="large" icon status="enabled">
        Hello
      </Button>
    </div>
  );
}
