import { cn } from "@/libs/utils";
import UserCard from "../ui/UserCard";

export default function SideImage({ signup }: { signup?: boolean }) {
  return (
    <div className={cn("hidden md:flex", signup ? "bg-signup" : "bg-login")}>
      <div className="bg- w-full self-end bg-loginGrad bg-center bg-no-repeat p-6 pt-[38px]">
        <UserCard />
      </div>
    </div>
  );
}
