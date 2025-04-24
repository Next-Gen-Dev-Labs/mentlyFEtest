import Image from "next/image";
import { Button, WidgetCard } from "~/_components/ui";

export const MentorWidget = () => {
  return (
    <WidgetCard title="Mentors">
      <div className="flex w-full flex-col items-start gap-4">
        <div className="w-full border-b border-[#F3F3F3] py-2 flex items-center gap-[22px] h-13">
          <div className="flex flex-1 gap-2 items-center h-9">
            <Image
              src={"/images/person-1.png"}
              alt="person-1"
              width={32}
              height={32}
              className="rounded-full object-center object-cover"
              loading="lazy"
            />
            <div className="flex-1 flex flex-col gap-0.5 items-start">
              <p className="text-sm font-bold text-gray-2">Maxwell Smith</p>
              <p className="text-[10px] text-grey-2">Product Designer</p>
            </div>
          </div>
          <Button size={"sm"} width={"max"} radius={"full"}>
            Message
          </Button>
        </div>
        <div className="w-full border-b border-[#F3F3F3] py-2 flex items-center gap-[22px] h-13">
          <div className="flex flex-1 gap-2 items-center h-9">
            <Image
              src={"/images/person-2.jpg"}
              alt="person-1"
              width={32}
              height={32}
              className="rounded-full object-center object-cover"
              loading="lazy"
            />
            <div className="flex-1 flex flex-col gap-0.5 items-start">
              <p className="text-sm font-bold text-gray-2">Adeati Samuel</p>
              <p className="text-[10px] text-grey-2">Product Designer</p>
            </div>
          </div>
          <Button size={"sm"} width={"max"} radius={"full"}>
            Message
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col px-6 py-4 gap-5 items-center">
        <Button
          radius={"full"}
          size={"lg"}
          variant={"secondary"}
          width={"full"}
        >
          See all
        </Button>
      </div>
    </WidgetCard>
  );
};
