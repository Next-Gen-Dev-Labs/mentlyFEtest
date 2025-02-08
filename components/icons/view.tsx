import Image from "next/image";
import view from "@/public/icons/view.svg";

export default function View() {
  return <Image src={view} alt="icon" width={32} height={32} />;
}
