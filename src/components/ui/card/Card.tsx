import CardCover from "./CardCover";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
type CardProps = {
  type?: "wishlist" | "watch";
};

export default function Card({ type }: CardProps) {
  return (
    <div className="w-[285px] space-y-1">
      <CardCover type={type} />
      <CardHeader />
      {type !== "watch" && <CardFooter />}
    </div>
  );
}
