import Choose from "@/components/ui/Choose";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center space-y-20">
      <Choose>Option</Choose>
      <Choose small>Option</Choose>
      <Choose small status="active">
        Option
      </Choose>
      <Choose status="disabled">Option</Choose>
    </div>
  );
}
