import Card from "@/components/ui/Card";
import ButtonPurple from "../../ui/ButtonPurple";
import { CalendarIcon, Clock } from "lucide-react";
import ButtonWithBorderPurple from "../../ui/ButtonWithBorderPurple";
import Image, {StaticImageData} from "next/image";
import { GroupCallIcon } from "@/components/svgIcons/SvgIcons";

interface GroupCallType {
  backgroundImage: StaticImageData;
  status: string;
  title: string;
  date: string;
  time: string;
  studyGroup: {
    avatar: string;
    name: string;
  };
  mentors: {
    avatars: string[];
  };
}

const groupCalls_widget = ({ GroupCalls }: { GroupCalls: GroupCallType[] }) => {
  return (
    <>
      {GroupCalls.map((meeting, index) => (
            <Card
              key={index}
              className="p-4 bg-[#F9F7FF] md:min-w-[350px] md:max-w-[350px]"
            >
              <Image
                src={meeting.backgroundImage}
                alt="Description of the image"
                width={500}
                height={200}
                className="w-full "
              />
              {/* Status Badge */}
              <div className="flex items-center gap-2 my-2">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                  ${
                    meeting.status === "Ongoing"
                      ? "bg-[#d0eccc] text-[#1F8B01]"
                      : " bg-[#E0DDFF] text-[#1C0AE1]"
                  }
                `}
                >
                  <span
                    className={
                      meeting.status === "Ongoing"
                        ? "w-2 h-2 bg-[#1F8B01] rounded-full mr-1.5"
                        : "w-2 h-2 bg-[#1C0AE1] rounded-full mr-1.5"
                    }
                  ></span>
                  {meeting.status}
                </span>
              </div>

              {/* Meeting Title */}
              <h2 className="text-base border-[#D0D5DD] pb-1.5 border-b font-normal text-[#595564] mb-2">
                {meeting.title}
              </h2>

              {/* Date and Time */}
              <div className="flex items-center gap-6 mb-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 font-medium h-4 text-[#595564]" />
                  <span className="text-xs text-[#595564] font-medium">
                    {meeting.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 font-medium text-[#595564]" />
                  <span className="text-xs font-medium text-[#595564]">
                    {meeting.time}
                  </span>
                </div>
              </div>

              {/* Study Group and Mentors */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xs font-normal text-[#A195C0] ml-8">
                    Study Group
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={meeting.studyGroup.avatar}
                        alt="Study Group"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-xs font-semibold text-[#595564]">
                        {meeting.studyGroup.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs -ml-7 font-normal text-[#A195C0]">
                    Mentors
                  </span>
                  <div className="flex -space-x-2">
                    {meeting.mentors.avatars.map((avatar, i) => (
                      <Image
                        key={i}
                        src={avatar}
                        alt={`Mentor ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <ButtonWithBorderPurple
                  className="px-2 py-2 text-[#6F01D0] text-xs rounded-md"
                  value="View Participants"
                />
                <ButtonPurple
                  className="px-4 py-2 flex items-center gap-2 rounded-md text-xs"
                  value="Join Now"
                  icon={<GroupCallIcon />}
                />
              </div>
            </Card>
          ))}
    </>
  )
}

export default groupCalls_widget
