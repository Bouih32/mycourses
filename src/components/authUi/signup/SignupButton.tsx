import Button from "../../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import Signup from "./Signup";
import { MdTimelapse } from "react-icons/md";
import SignupHolder from "./SignupHolder";

export default function SignupButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button icon={<MdTimelapse />}>Sign Up</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Signup modal</DialogTitle>
        <SignupHolder />
        {/* <Signup /> */}
      </DialogContent>
    </Dialog>
  );
}
