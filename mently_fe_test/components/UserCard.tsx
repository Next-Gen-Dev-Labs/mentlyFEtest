// components/UserCard.tsx
import Image from "next/image";
import Button from "@/components/Button";

type Props = {
  name: string;
  email: string;
  image: string;
};

export default function UserCard({ name, email, image }: Props) {
  return (
    <div className=" max-w-sm rounded-2xl shadow p-4 flex items-center gap-4">
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div className="flex">
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold text-gray-800">{name}</h2>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
        <div className="mt-2 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 border-red-300 hover:bg-red-50"
          >
            Reject
          </Button>
          <Button
            size="sm"
            className="bg-[#6F01D0] hover:bg-green-700 text-white"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
