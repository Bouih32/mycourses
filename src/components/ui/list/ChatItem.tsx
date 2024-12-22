import Image from "next/image";
import girl from "@/images/girl.png";

export default function ChatItem() {
  return (
    <div className="flex w-[387px] items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <div className="h-[36px] w-[36px] overflow-hidden rounded-full">
          <Image src={girl} alt="girl" />
        </div>

        <div>
          <h3 className="text-10lg text-dark">Username</h3>

          <p className="text-10sm text-black60">Text</p>
        </div>
      </div>
    </div>
  );
}
