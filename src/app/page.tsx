import Option from "@/components/ui/select/Option";
import Select from "@/components/ui/select/Select";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center space-y-10 bg-slate-200">
      <Select>
        <Option>Option1</Option>
        <Option>Option1</Option>
        <Option>Option1</Option>
      </Select>
    </div>
  );
}
