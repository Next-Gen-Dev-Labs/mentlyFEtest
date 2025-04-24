import Image from "next/image";
import Button from "./Button";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";
import UserCard from "./UserCard";

const users = [
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/profile1.png",
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: "/profile2.png",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/profile1.png",
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: "/profile2.png",
  },
];

export default function Applications() {
  return (
    <section className="w-[380px] shadow p-4 rounded">
      <div className="">
        <div className="flex justify-between">
          <SectionRightHead title="Applications" />
          <SectionLeftHead />
        </div>
        <div className="py-6">
          <p className=" text-[10px] text-[#7D8DA6]  font-medium">Mentors</p>
          <div className="border-b rounded-2xl p-4 flex  items-center gap-4">
            <Image
              src={users[0].image}
              alt={users[0].name}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <h2 className="text-[14px] font-semibold text-[#4F4F4F]">
                  {users[0].name}
                </h2>
                <p className="text-[10px] text-[#7D8DA6]">{users[0].email}</p>
              </div>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#d09696] border-[#d09696] bg-[#FFEDED] hover:bg-red-50"
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
        </div>

        <div className=" ">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
}
