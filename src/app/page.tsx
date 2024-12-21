import Calender from "@/components/ui/calender/Calender";
import DayContainer from "@/components/ui/calender/DayContainer";
import Month from "@/components/ui/calender/Month";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center space-y-10 bg-slate-200">
      <Calender>
        <Month />
        <DayContainer />
      </Calender>
    </div>
  );
}
