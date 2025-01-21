import { cn } from "@/libs/utils";
import UserCard from "../ui/UserCard";

export default function SideImage({ signup }: { signup?: boolean }) {
  return (
    <div
      className={cn(
        "hidden bg-cover bg-center bg-no-repeat md:flex",
        signup ? "bg-signup" : "bg-login",
      )}
    >
      <div className="bg- w-full self-end bg-loginGrad p-6 pt-[38px]">
        <UserCard />
      </div>
    </div>
  );
}
