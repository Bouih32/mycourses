import { nanoid } from "nanoid";
import Choose from "../ui/Choose";
import { filters } from "@/libs/constantes";

export default function Filter() {
  return (
    <section className="mt-[24px] hidden flex-nowrap items-center gap-2 overflow-hidden px-5 sm:px-0 lg:flex">
      {filters.map((ele, index) => {
        return index === 0 ? (
          <Choose key={nanoid()} status="active">
            {ele}
          </Choose>
        ) : (
          <Choose key={nanoid()}>{ele}</Choose>
        );
      })}
    </section>
  );
}
