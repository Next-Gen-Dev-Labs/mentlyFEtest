"use-client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Widget {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ProgramData {
  id: string;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  mentors?: { id: string; avatarUrl: string }[]; // Already optional
  actionButton: "Analysis" | "Assign Mentor";
  hostedBy: { name: string; avatarUrl: string };
}

interface GroupCallData {
  id: string;
  imageUrl: string;
  status: "Ongoing" | "Upcoming";
  title: string;
  date: string;
  time: string;
  studyGroup: string;
  label: string;
  mentors: { id: string; avatarUrl: string }[];
}

interface MentorData {
  id: string;
  name: string;
  expertise: string;
  avatarUrl: string;
}

interface RecentActivityData {
  id: string;
  avatarUrl: string;
  title: string;
  description: string;
  timestamp: string;
}

interface MentorApplicationData {
  id: string;
  avatarUrl: string;
  name: string;
  email: string;
  role: string;
  experience: string;
  location: string;
  timezone: string;
}

interface StudentApplicationData {
  id: string;
  avatarUrl: string;
  name: string;
  email: string;
}

const mentorApplicationsData: MentorApplicationData[] = [
  {
    id: "mapp-1",
    avatarUrl: "https://images.unsplash.com/photo-1623062231692-22f5d032f0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    experience: "4 years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
  },
];

const studentApplicationsData: StudentApplicationData[] = [
  {
    id: "sapp-1",
    avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
  },
  {
    id: "sapp-2",
    avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
  },
  {
    id: "sapp-3",
    avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
  },
  {
    id: "sapp-4",
    avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
  },
  {
    id: "sapp-5",
    avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
  },
  {
    id: "sapp-6",
    avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
  },
];

const programsData: ProgramData[] = [
  {
    id: "program-1",
    imageUrl: "https://images.unsplash.com/photo-1726064855900-54128f083192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tag: "Bootcamp", // Will use #1E40AF (blue)
    title: "Fundamentals of User Interface & Experience",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs.",
    mentors: [
      { id: "m1", avatarUrl: "https://images.unsplash.com/photo-1623062231692-22f5d032f0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m2", avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    ],
    actionButton: "Analysis",
    hostedBy: { name: "", avatarUrl: "" },
  },
  {
    id: "program-2",
    imageUrl: "https://images.unsplash.com/photo-1745177717290-9ce463cdc5e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tag: "Group Call", // Will use #166534 (green)
    title: "Colour Hack Practical",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs.",
    mentors: [],
    actionButton: "Analysis",
    hostedBy: { name: "Faith Okolo", avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  },
  {
    id: "program-3",
    imageUrl: "https://images.unsplash.com/photo-1744719258805-3bae36cda1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tag: "Group Call", // Will use #166534 (green)
    title: "Colour Hack Practical Group Call",
    description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs.",
    mentors: [],
    actionButton: "Assign Mentor",
    hostedBy: { name: "Self", avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  },
];

const groupCallsData: GroupCallData[] = [
  {
    id: "call-1",
    imageUrl: "https://images.unsplash.com/photo-1725886297109-360eb6f9d768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00 AM",
    label: "Study Group",
    studyGroup: "UX Strategy Study group",
    mentors: [
      { id: "m1", avatarUrl: "https://images.unsplash.com/photo-1623062231692-22f5d032f0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m2", avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m3", avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    ],
  },
  {
    id: "call-2",
    imageUrl: "https://images.unsplash.com/photo-1744024946414-6163abf2df2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Upcoming",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00 AM",
    label: "Study Group",
    studyGroup: "UX Strategy Study group",
    mentors: [
      { id: "m4", avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m5", avatarUrl: "https://images.unsplash.com/photo-1599751449353-779b810ebb37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m6", avatarUrl: "https://images.unsplash.com/photo-1623062231692-22f5d032f0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    ],
  },
  {
    id: "call-3",
    imageUrl: "https://images.unsplash.com/photo-1726137570057-2f410417c3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00 AM",
    label: "Study Group",
    studyGroup: "UX Strategy Study group",
    mentors: [
      { id: "m7", avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m8", avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m9", avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    ],
  },
  {
    id: "call-4",
    imageUrl: "https://images.unsplash.com/photo-1726137570057-2f410417c3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00 AM",
    label: "Study Group",
    studyGroup: "UX Strategy Study group",
    mentors: [
      { id: "m7", avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m8", avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m9", avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    ],
  },
  {
    id: "call-5",
    imageUrl: "https://images.unsplash.com/photo-1726137570057-2f410417c3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00 AM",
    label: "Study Group",
    studyGroup: "UX Strategy Study group",
    mentors: [
      { id: "m7", avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m8", avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { id: "m9", avatarUrl: "https://images.unsplash.com/photo-1626707064335-ce7ac5f56134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    ],
  },
];

const mentorsData: MentorData[] = [
  {
    id: "m1",
    name: "John Doe",
    expertise: "UX Design",
    avatarUrl: "https://images.unsplash.com/photo-1623062231692-22f5d032f0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "m2",
    name: "Jane Smith",
    expertise: "Product Design",
    avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "m3",
    name: "Alex Johnson",
    expertise: "UI Development",
    avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const recentActivitiesData: RecentActivityData[] = [
  {
    id: "act-1",
    avatarUrl: "https://images.unsplash.com/photo-1623062231692-22f5d032f0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    timestamp: "25 minutes Ago",
  },
  {
    id: "act-2",
    avatarUrl: "https://plus.unsplash.com/premium_photo-1668032525816-2e309fa4fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    timestamp: "25 minutes Ago",
  },
  {
    id: "act-3",
    avatarUrl: "https://images.unsplash.com/photo-1687880360665-f9b7112d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    timestamp: "25 minutes Ago",
  },
];

const chartData = [
  { category: "Students", users: 200, fill: "#60A5FA" }, // Blue
  { category: "Mentors", users: 8, fill: "#A7F3D0" },   // Light Green
  { category: "Programs", users: 22, fill: "#F9A8D4" }, // Pink
  { category: "Others", users: 10, fill: "#FBBF24" },   // Orange
];

const chartConfig = {
  users: {
    label: "Users",
  },
  Students: {
    label: "Students",
    color: "#60A5FA",
  },
  Mentors: {
    label: "Mentors",
    color: "#A7F3D0",
  },
  Programs: {
    label: "Programs",
    color: "#F9A8D4",
  },
  Others: {
    label: "Others",
    color: "#FBBF24",
  },
} satisfies ChartConfig;

export const UsersChart = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const filteredData = selectedFilter === "All"
    ? chartData
    : chartData.filter((entry) => entry.category === selectedFilter);

  const totalFilteredUsers = React.useMemo(() => {
    return filteredData.reduce((sum, entry) => sum + entry.users, 0);
  }, [filteredData]);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <div className="flex justify-between w-full items-center">
          <CardTitle className="font-bold font-['poppins'] text-slate-500">Users</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 flex items-center gap-1">
              {selectedFilter}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              {["All", "Students", "Mentors", "Programs", "Others"].map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => setSelectedFilter(option)}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="flex flex-row h-full">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] flex-1"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel className="bg-white" />}
              />
              <Pie
                data={filteredData}
                dataKey="users"
                nameKey="category"
                innerRadius={60}
                outerRadius={90}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox && viewBox.cy !== undefined) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy - 10}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalFilteredUsers}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy + 15}
                            className="fill-muted-foreground text-base"
                          >
                            Users
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="flex flex-col justify-center ml-4">
            {filteredData.map((entry) => (
              <div key={entry.category} className="flex items-center gap-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-sm text-gray-600">
                  {`${entry.category}: ${entry.users}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProgramCard: React.FC<{ program: ProgramData }> = ({ program }) => {
  const tagColors: Record<string, string> = {
    Bootcamp: '#1E40AF', // Blue
    'Group Call': '#166534', // Green
    default: '#6B21A8', // Purple
  };

  const tagColor = tagColors[program.tag] || tagColors.default;

  // Debug: Log the tag and tagColor to confirm values
  console.log(`Program: ${program.title}, Tag: ${program.tag}, TagColor: ${tagColor}`);

  return (
    <div className="w-full rounded-xl shadow-md bg-card transition-transform duration-200 hover:shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={program.imageUrl}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-t-xl object-cover brightness-75"
          priority={program.id === "program-1"}
        />
        <h3 className="absolute top-4 left-4 text-white text-2xl font-bold leading-tight line-clamp-2">
          {program.title}
        </h3>
        <Badge
          className="absolute bottom-4 left-4 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 z-10"
          style={{ backgroundColor: `${tagColor}` }} // Light blue with 30% opacity for Bootcamp
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: tagColor }} // Dark blue for Bootcamp
          ></span>
          {program.tag}
        </Badge>
      </div>
      <div className="p-2">
        <p className="text-base text-muted-foreground line-clamp-4 mt-2">{program.description}</p>
        <div className="flex justify-between items-center mt-4 w-full gap-3">
          {/* Mentors and Hosted By Container */}
          <div className="flex lg:flex-col sm:flex-row md:flex-row gap-3">
            {program.mentors && program.mentors.length > 0 && (
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {program.mentors.map((mentor, index) => (
                    <Image
                      key={mentor.id}
                      src={mentor.avatarUrl}
                      alt={`Mentor ${index + 1}`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full ring-2 ring-card"
                    />
                  ))}
                </div>
                <span className="text-base lg:text-xs sm:text-[7px] text-muted-foreground font-medium">
                  Mentors
                </span>
              </div>
            )}
            {program.hostedBy.name &&
              program.hostedBy.avatarUrl &&
              program.hostedBy.name !== "" &&
              program.hostedBy.avatarUrl !== "" && (
                <div className="flex items-center gap-3">
                  <Image
                    src={program.hostedBy.avatarUrl}
                    alt={program.hostedBy.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full ring-2 ring-card"
                  />
                  <span className="text-base lg:text-xs sm:text-[7px] text-muted-foreground">
                    Hosted By {program.hostedBy.name}
                  </span>
                </div>
              )}
          </div>
          {/* Buttons Container */}
          <div className="flex flex-row gap-2">
            <Button
              variant="outline"
              className="min-w-[120px] px-4 py-2 border border-violet-400 text-primary hover:bg-primary/10 rounded-lg"
              aria-label={`View details for ${program.title}`}
            >
              View Details
            </Button>
            <Button
              className="min-w-[120px] px-4 py-2 bg-[#6B21A8] text-white hover:bg-[#5B1A99] rounded-lg"
              aria-label={program.actionButton}
            >
              {program.actionButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GroupCallCard: React.FC<{ call: GroupCallData }> = ({ call }) => {
  const statusColor = call.status === "Ongoing" ? "bg-green-500" : "bg-purple-500";
  const statusTextColor = call.status === "Ongoing" ? "text-green-800" : "text-purple-800";
  const joinButtonClass = call.status === "Ongoing"
    ? "bg-violet-600 hover:bg-violet-500 text-white"
    : "bg-violet-400 text-violet-700 hover:bg-violet-600";

  return (
    <div className="w-full mx-2 md:w-full rounded-lg shadow-md bg-card transition-transform duration-200 hover:shadow-lg">
      <div className="relative h-[150px] sm:h-[200px] md:h-[250px] overflow-hidden">
        <Image
          src={call.imageUrl}
          alt={call.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 400px, 390px"
          className="rounded-t-lg object-cover"
          priority={call.id === "call-1"}
        />
      </div>
      <div className="p-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor} ${statusTextColor}`}
        >
          <span
            className={`mr-1.5 h-2 w-2 rounded-full ${call.status === "Ongoing" ? "bg-green-800" : "bg-purple-800"}`}
          ></span>
          {call.status}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-card-foreground line-clamp-2">{call.title}</h3>
        <div className="mt-2 space-y-1 flex gap-3 justify-start items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{call.date}</span>
          </div>
          <div className="w-[1px] h-4 bg-slate-500"></div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{call.time}</span>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="flex items-center">
            <Users className="mr-1 h-5 w-5" aria-hidden="true" />
            <span className="flex flex-col">
              <span className="text-xs text-slate-300">{call.label}</span>
              <span className="text-sm font-semibold text-slate-700">{call.studyGroup}</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Mentors</span>
            <div className="flex -space-x-3">
              {call.mentors.map((mentor, index) => (
                <Image
                  key={mentor.id}
                  src={mentor.avatarUrl}
                  alt={`Mentor ${index + 1}`}
                  width={32}
                  height={32}
                  className="h-6 w-6 rounded-full ring-2 ring-card"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            className="flex-1 text-violet-600 outline-violet-600 hover:text-white hover:bg-violet-600"
            aria-label={`View participants for ${call.title}`}
          >
            View Participants
          </Button>
          <Button className={`flex-1 bg-violet-600 text-white ${joinButtonClass}`} aria-label={`Join ${call.title}`}>
            Join Now <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const MentorCard: React.FC<{ mentor: MentorData }> = ({ mentor }) => {
  return (
    <div className="flex items-center font-['poppins'] gap-3 p-3 rounded-lg bg-card">
      <Image
        src={mentor.avatarUrl}
        alt={mentor.name}
        width={48}
        height={48}
        className="h-15 w-15 rounded-full ring-2 ring-card"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-card-foreground">{mentor.name}</h3>
        <p className="text-xs text-slate-400">{mentor.expertise}</p>
      </div>
      <Button
        variant="outline"
        className="text-white font-semibold hover:bg-purple-400 bg-purple-600"
        aria-label={`Message ${mentor.name}`}
      >
        Message
      </Button>
    </div>
  );
};

const MentorApplicationCard: React.FC<{ application: MentorApplicationData }> = ({ application }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-1 rounded-lg bg-card font-['poppins']">
      <div className="flex lg:flex lg:flex-row md:flex-row sm:items-start sm:flex-col gap-1 justify-between lg:items-center w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 text-primary rounded focus:ring-primary"
            aria-label={`Select ${application.name}`}
          />
          <Image
            src={application.avatarUrl}
            alt={application.name}
            width={48}
            height={48}
            className="h-14 w-14 rounded-full ring-2 ring-card"
          />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-card-foreground">{application.name}</h3>
            <p className="text-xs text-gray-400">{application.email}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="text-destructive bg-red-200 border-red-400 hover:bg-red-300 text-xs"
                aria-label={`Reject ${application.name}`}
              >
                Reject
              </Button>
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 text-xs"
                aria-label={`Accept ${application.name}`}
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 text-nowrap">
  <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[11px] px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-200 text-purple-800 rounded-md">
    {application.role}
  </span>
  <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[11px] px-2 sm:px-3 py-1 sm:py-1.5 bg-green-200 text-green-800 rounded-md">
    {application.experience}
  </span>
  <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[11px] px-2 sm:px-3 py-1 sm:py-1.5 bg-green-600 text-white rounded-md flex items-center">
    <span className="mr-1">🇳🇬</span> {application.location}
  </span>
  <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[11px] px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-200 text-gray-800 rounded-md">
    {application.timezone}
  </span>
</div>
    </div>
  );
};

const StudentApplicationCard: React.FC<{ application: StudentApplicationData }> = ({ application }) => {
  return (
    <div className="flex sm:flex-row items-center md:flex lg:flex border-b-slate-200 border-b items-center gap-2 p-1 rounded-lg bg-card font-['poppins']">
      <div className="flex md:flex items-center lg:flex gap-2 w-full sm:flex">
      <input
        type="checkbox"
        className="h-4 w-4 text-primary rounded focus:ring-primary"
        aria-label={`Select ${application.name}`}
      />
      <Image
        src={application.avatarUrl}
        alt={application.name}
        width={48}
        height={48}
        className="h-15 w-15 xs:w-15 xs:h-15  rounded-full ring-2 ring-card"
        />
      <div className="flex-1">
        <h3 className="text-sm font-bold text-card-foreground">{application.name}</h3>
        <p className="text-xs text-gray-400">{application.email}</p>
      </div>
        </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="text-destructive bg-red-200 border-red-400 hover:bg-red-300 text-xs"
          aria-label={`Reject ${application.name}`}
        >
          Reject
        </Button>
        <Button
          className="bg-purple-600 text-white hover:bg-purple-700 text-xs"
          aria-label={`Accept ${application.name}`}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};
const GroupCallsWidget = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-2 snap-x snap-mandatory custom-scrollbar"
        >
          {groupCallsData.map((call) => (
            <div
              key={call.id}
              className="flex-shrink-0 w-[90vw] mb-2 pb-2 sm:w-[400px] snap-center ml-1 first:ml-4 last:mr-4"
            >
              <GroupCallCard call={call} />
            </div>
          ))}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full opacity-20 shadow-md group-calls-prev"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 opacity-20 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md group-calls-next"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

const RecentActivityCard: React.FC<{ activity: RecentActivityData }> = ({ activity }) => {
  return (
    <div className="flex items-start gap-3">
      <Image
        src={activity.avatarUrl}
        alt={activity.title}
        width={40}
        height={40}
        className="rounded-full w-15 h-15"
      />
      <div className="flex-1 font-['poppins']">
        <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
        <p className="text-md text-gray-400">{activity.description}</p>
        <p className="text-md text-gray-400 mt-1">{activity.timestamp}</p>
      </div>
    </div>
  );
};

export const initialWidgets: Widget[] = [
  {
    id: "programs",
    title: "Programs",
    content: (
      <div className="flex flex-col space-y-4 h-full">
        {programsData.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    ),
  },
  {
    id: "groupCalls",
    title: "Group Calls",
    content: <GroupCallsWidget />,
  },
  {
    id: "applications",
    title: "Applications",
    content: (
      <div className="flex flex-col space-y-3 h-full">
      <h2 className="text-sm text-gray-500 font-['poppins'] mb-2">Mentors</h2>
      <div className="grid grid-cols-1 gap-3">
        {mentorApplicationsData.map((application) => (
          <MentorApplicationCard key={application.id} application={application} />
        ))}
      </div>
      <hr className="border-t border-gray-200 my-2" />
      <h2 className="text-sm text-gray-500 font-['poppins'] mb-2">Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {studentApplicationsData.map((application) => (
          <StudentApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
    ),
  },
  {
    id: "mentors",
    title: "Mentors",
    content: (
      <div className="flex flex-col space-y-3 h-full">
        {mentorsData.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
        <Button className="px-3 py-8 bg-purple-300 text-[25px] text-purple-600 rounded-full">
          See all
        </Button>
      </div>
    ),
  },
  {
    id: "recentActivities",
    title: "Recent Activities",
    content: (
      <div className="flex flex-col space-y-4 p-4 bg-white h-full">
        <div className="flex flex-col space-y-3">
          {recentActivitiesData.map((activity) => (
            <RecentActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "users",
    title: "Users",
    content: <UsersChart />,
  },
];