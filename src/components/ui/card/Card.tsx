import CardCover from "./CardCover";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { DataType } from "@/libs/types";
type CardProps = {
  type?: "wishlist" | "watch";
  data: DataType;
};

export default function Card({ type, data }: CardProps) {
  return (
    <div className="w-[285px] cursor-pointer space-y-1">
      <CardCover type={type} cover={data.cover} />
      <CardHeader title={data.title} />
      {type !== "watch" && <CardFooter />}
    </div>
  );
}
