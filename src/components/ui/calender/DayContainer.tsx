export default function DayContainer() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="flex items-center justify-between text-16sm text-black60 opacity-[0.996]">
      {days.map((day, index) => (
        <span key={index}>{day}</span>
      ))}
    </div>
  );
}
