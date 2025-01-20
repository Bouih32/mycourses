import Button from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Login from "./Login";

export default function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button status="enabled" classname="text-black90 border-black90 ">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Login modal</DialogTitle>
        <Login />
      </DialogContent>
    </Dialog>
  );
}
