import UserCard from "../ui/UserCard";

export default function SideImage() {
  return (
    <div className="bg-login hidden md:flex">
      <div className="bg-loginGrad w-full self-end p-6 pt-[38px]">
        <UserCard />
      </div>
    </div>
  );
}
