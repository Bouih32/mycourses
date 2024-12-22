import Button from "@/components/ui/Button";
import Calender from "@/components/ui/calender/Calender";
import DayContainer from "@/components/ui/calender/DayContainer";
import Month from "@/components/ui/calender/Month";
import Choose from "@/components/ui/Choose";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import Radio from "@/components/ui/Radio";
import Search from "@/components/ui/Search";
import Switch from "@/components/ui/Switch";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8 bg-slate-100">
      <div className="space-y-4">
        <Header />
        <Header loged />
      </div>
      <section className="flex flex-col space-y-8 px-8">
        {" "}
        <div className="flex h-fit w-fit items-center gap-4">
          <Button>Button</Button>
          <Button icon>Button</Button>
          <Button icon />
          <Button icon size="large">
            Button
          </Button>
          <Button icon size="small">
            Button
          </Button>
          <Button icon status="disabled">
            Button
          </Button>
          <Button icon status="enabled">
            Button
          </Button>
        </div>
        <div className="flex h-fit w-fit items-center gap-4">
          <Choose>Choose</Choose>
          <Choose small>Choose</Choose>
          <Choose status="active">Choose</Choose>
          <Choose status="disabled">Choose</Choose>
        </div>
        <div className="flex h-fit w-fit items-center gap-8">
          <Input label="text goes here" />
          <Input label="text goes here" placeholder="placeholder" />
          <Input label="text goes here" placeholder="placeholder" disabled />
          <Input
            label="text goes here"
            placeholder="placeholder"
            error="Something wrong"
          />
        </div>
        <div className="flex gap-8">
          <Radio />
          <Radio disabled />
        </div>
        <Search />
        <div className="flex gap-8">
          <Switch />
          <Switch disabled />
        </div>
        <Calender>
          <Month />
          <DayContainer />
        </Calender>
      </section>

      <Footer />
    </main>
  );
}
