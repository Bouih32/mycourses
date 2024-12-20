import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center space-y-20">
      <Input label="something" placeholder="placeholder" disabled />
      <Input label="placeholder label" disabled />
      <Input
        label="something"
        placeholder="placeholder"
        error="Error message here!"
      />
    </div>
  );
}
