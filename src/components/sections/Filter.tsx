import { nanoid } from "nanoid";
import Choose from "../ui/Choose";

export default function Filter() {
  return (
    <section className="mt-[24px] hidden space-x-2 px-5 sm:px-0 lg:block">
      <Choose status="active">Adobe Illustrator</Choose>
      {Array.from({ length: 7 }).map(() => (
        <Choose key={nanoid()}>Adobe Illustrator</Choose>
      ))}
    </section>
  );
}
