import { Menu, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React from "react";
import SubMentorCard from "./submentor";

const UserEntry = ({
  name,
  email,
  avatar = "/man.svg",
}: {
  name: string;
  email: string;
  avatar?: string;
}) => (
  <div className="flex items-center gap-4 w-full group hover:bg-accent/50 p-2 rounded-lg transition-colors">
    <input
      type="checkbox"
      className="w-4 h-4 rounded border-border accent-primary"
    />

    <div className="flex items-center gap-3 flex-1">
      <Image
        src={avatar}
        alt={`${name}'s avatar`}
        width={32}
        height={32}
        className="rounded-full border-2 border-muted"
      />

      <div className="flex-1">
        <h3 className="text-[13px] md:text-base font-medium text-foreground">
          {name}
        </h3>
        <p className="text-[12px] md:text-sm text-muted-foreground">{email}</p>
      </div>
    </div>

    <div className="flex gap-2">
      <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-destructive/20 text-destructive hover:bg-destructive/10 transition-colors">
        Reject
      </button>
      <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
        Accept
      </button>
    </div>
  </div>
);

type Student = {
  name: string;
  email: string;
  avatar?: string;
};

type Mentor = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  experience: string;
  location: string;
  country: string;
  countryCode: string;
  timezone: string;
};

type User = Student | Mentor;

const Section = ({ title, users }: { title: string; users: User[] }) => (
  <>
    <p className="text-xs text-muted-foreground font-medium mb-2">{title}</p>
    <div className="space-y-4">
      {users.map((user, index) => (
        <React.Fragment key={user.email}>
          {title === "Mentors" ? (
            <SubMentorCard mentor={user as Mentor} />
          ) : (
            <UserEntry {...user} />
          )}
          {index !== users.length - 1 && <hr className="border-border" />}
        </React.Fragment>
      ))}
    </div>
  </>
);

const ApplicationCards = () => {
  const sections = [
    {
      title: "Mentors",
      users: [
        {
          id: "1",
          name: "Maxwell Smith",
          email: "max@gmail.com",
          avatar: "/man.svg",
          role: "Product Designer",
          experience: "5years Experience",
          location: "Lagos",
          country: "Nigeria",
          countryCode: "NG",
          timezone: "GMT +1",
        },
      ],
    },
    {
      title: "Students",
      users: [
        { name: "John Doe", email: "john@example.com" },
        { name: "Alice Smith", email: "alice@example.com" },
        { name: "Bob Wilson", email: "bob@example.com" },
        { name: "Micheal Jeff", email: "jeff@example.com" },
      ],
    },
  ];

  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Menu className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-base font-bold text-muted-foreground/100">
            Applications
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-sm font-medium text-primary hover:underline">
            See all
          </button>
          <EllipsisVertical className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <React.Fragment key={section.title}>
            <Section title={section.title} users={section.users} />
            {index !== sections.length - 1 && (
              <hr className="border-border my-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ApplicationCards;
