import Button from "../ui/Button";
import { FaFacebookSquare, FaApple } from "react-icons/fa";

export default function OtherMethodes() {
  return (
    <section className="text-center">
      <p className="my-4">or you can</p>
      <div className="space-y-2">
        <Button icon={<FaFacebookSquare />} classname="bg-[#4267B2]">
          Continue with Facebook
        </Button>
        <Button icon={<FaApple />} classname="bg-dark">
          Continue with Apple
        </Button>
        <Button icon={<FaApple />} status="enabled" classname="text-dark">
          Continue with Google
        </Button>
      </div>
    </section>
  );
}
