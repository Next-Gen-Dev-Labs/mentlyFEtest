import { ReactNode } from "react";
import { WidgetCard } from "~/_components/ui";
import { WidgetApplicationCard } from "~/_components/ui/widgets";

const mentors: Array<{
  name: string;
  email: string;
  image: string;
  mentorInfo?: {
    role: string;
    location: string;
    timeZone: string;
    experience: string;
  };
}> = [
    {
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: "/images/person-1.png",
      mentorInfo: {
        role: "Product Designer",
        location: "Lagos, Nigeria",
        experience: "4years Experience",
        timeZone: "GMT +1",
      },
    },
  ];
const student: Array<{
  name: string;
  email: string;
  image: string;
}> = [
    {
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      image: "/images/person-2.jpg",
    },
    {
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: "/images/person-1.png",
    },
    {
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      image: "/images/person-2.jpg",
    },
  ];

export const ApplicationsWidget = () => {
  return (
    <WidgetCard title="Applications">
      <div className="w-full flex flex-col items-start px-4 py-5 gap-5">
        <ApplicationCard title="mentors">
          {mentors.map((mentor, index) => (
            <WidgetApplicationCard key={index} {...mentor} />
          ))}
        </ApplicationCard>
        <ApplicationCard title="students">
          {student.map((student, index) => (
            <WidgetApplicationCard key={index} {...student} />
          ))}
        </ApplicationCard>
      </div>
    </WidgetCard>
  );
};

const ApplicationCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="w-full flex flex-col items-start gap-2">
    <div className="h-7 px-6 py-2 flex items-center">
      <p className="text-grey-2 text-[10px] capitalize">{title}</p>
    </div>
    {children}
  </div>
);
