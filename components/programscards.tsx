import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Menu, EllipsisVertical, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const program = [
  {
    title: "Fundamentals of User interface & Experience",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    imageUrl: "/fundamental.svg",
    badge: "Bootcamp",
    mentors: [
      { name: "John", image: "/man.png" },
      { name: "Sarah", image: "/man.png" },
      { name: "Mike", image: "/man.png" },
    ],
  },
  {
    title: "Colour Hack Practical Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    imageUrl: "/teeth.svg",
    badge: "Group Call",
    mentors: [{ name: "Alex", image: "/man.png" }],
  },
  {
    title: "Colour Hack Practical Group Call",
    description:
      "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
    imageUrl: "/teeth.svg",
    badge: "Group Call",
    mentors: [
      { name: "David", image: "/man.png" },
      { name: "Lisa", image: "/man.png" },
    ],
  },
];

const ProgramCards = () => {
  return (
    <div className="h-auto rounded-xl bg-card py-2.5 px-3">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-4">
          <Menu size={16} />
          <span className="text-base font-bold text-muted-foreground/100">
            Programs
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[13.27px] font-semibold text-primary">
            See all
          </span>
          <EllipsisVertical size={18} />
        </div>
      </div>

      <div className="flex items-center gap-3 justify-end mb-4">
        <span className="text-[#918C9C] text-[12px] font-semibold">Filter</span>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <div className="flex items-center gap-2 border-2 px-2.5 py-1.5 rounded-md">
              <span className="text-[#595564] text-[12px] font-medium">
                Active
              </span>
              <ChevronDown size={16} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card rounded-lg shadow-md">
            <DropdownMenuItem className="text-[#595564] text-[12px] font-medium cursor-pointer">
              Active
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-[#595564] text-[12px] font-medium cursor-pointer">
              Inactive
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-[#595564] text-[12px] font-medium cursor-pointer">
              Pending
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        {program.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-card gap-2 rounded-xl px-2 pt-2 pb-2 shadow-md"
          >
            {/* Image section with title overlay */}
            <div className="relative h-24 w-full rounded-2xl px-2">
              <Image
                src={item.imageUrl || "/placeholder.svg?height=200&width=400"}
                alt={item.title}
                fill
                priority
                className="object-cover rounded-2xl w-full"
              />
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

              {/* Title overlay */}
              <div className="absolute -top-1 left-0 p-3 w-full">
                <h3 className="font-bold text-white text-[16.42px] leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Badge */}
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-green-500 text-[7px] text-white">
                  {item.badge}
                </Badge>
              </div>

              {/* Settings icon */}
              {/* <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full text-white hover:bg-white/10"
                >
                  <Settings size={14} />
                </Button>
              </div> */}
            </div>

            {/* Description section */}
            <div className="">
              <p className="text-xs leading-[-2%] font-normal text-foreground mb-1">
                {item.description}
              </p>

              {/* Footer with mentors and buttons */}
              <div className="flex justify-between items-center mt-1.5">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-2">
                    {item.mentors?.map((mentor, idx) => (
                      <Avatar
                        key={idx}
                        className="border-2 border-background h-5 w-5"
                      >
                        <AvatarImage
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                        />
                        <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground">
                    Mentors
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs text-purple-600 h-7 outline outline-primary px-3 rounded-md border-primary"
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    className="text-xs h-7 px-3 bg-purple-600 hover:bg-purple-700 rounded-md"
                  >
                    Analysis
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProgramCards;
