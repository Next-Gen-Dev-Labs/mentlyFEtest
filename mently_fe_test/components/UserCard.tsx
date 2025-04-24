import Button from "@/components/Button";

type Props = {
  name: string;
  email: string;
  image: string;
};

export default function UserCard({ name, email, image }: Props) {
  return (
    <div className="border-b border-[#DBDBDB] p-4 flex items-center gap-2">
      <input type="checkbox" />
      <img
        src={image}
        alt={name}
        className="rounded-full w-[32px] h-[32px] object-cover"
      />
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <h2 className="text-[14px] font-semibold text-[#4F4F4F]">{name}</h2>
          <p className="text-[10px] text-[#7D8DA6]">{email}</p>
        </div>
        <div className="mt-2 flex mobile lg:flex-none sm:flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 border-red-300 hover:bg-red-50"
          >
            Reject
          </Button>
          <Button
            size="sm"
            className="bg-[#6F01D0] hover:opacity-30 text-white"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
