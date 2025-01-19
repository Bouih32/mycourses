export default function MobileFilter() {
  return (
    <section className="flex h-10 flex-nowrap items-center overflow-hidden text-center text-14sm sm:hidden">
      <div className="group relative flex h-full min-w-[104px] items-center justify-center">
        <span className="text-main before:bg-main font-bold before:absolute before:bottom-0 before:right-[50%] before:h-1 before:w-[34.667px] before:translate-x-[50%] before:rounded-t-[20px]">
          All
        </span>
      </div>

      <div className="group relative flex h-full min-w-[104px] items-center justify-center">
        <span className="before:bg-main group-hover:text-main before:bottom-0 before:right-[50%] before:h-1 before:w-[34.667px] before:translate-x-[50%] before:rounded-t-[20px] group-hover:font-bold group-hover:before:absolute">
          Illustrator
        </span>
      </div>
      <div className="group relative flex h-full min-w-[104px] items-center justify-center">
        <span className="before:bg-main group-hover:text-main before:bottom-0 before:right-[50%] before:h-1 before:w-[34.667px] before:translate-x-[50%] before:rounded-t-[20px] group-hover:font-bold group-hover:before:absolute">
          Photoshop
        </span>
      </div>
      <div className="group relative flex h-full min-w-[104px] items-center justify-center">
        <span className="before:bg-main group-hover:text-main before:bottom-0 before:right-[50%] before:h-1 before:w-[34.667px] before:translate-x-[50%] before:rounded-t-[20px] group-hover:font-bold group-hover:before:absolute">
          UI Desiign
        </span>
      </div>
    </section>
  );
}
