import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@radix-ui/react-scroll-area"

const applications = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    experience: "5years Experience",
    location: "Lagos, Nigeria",
    timezone: "GMT +1",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "MS",
    type: "mentor",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "AS",
    type: "student",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "AS",
    type: "student",
  },
  {
    id: 3,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "AS",
    type: "student",
  },
  {
    id: 4,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    role: "Product Designer",
    avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
    initials: "AS",
    type: "student",
  },
  // {
  //   id: 5,
  //   name: "Adeati Samuel",
  //   email: "maxwellsmith@gmail.com",
  //   role: "Product Designer",
  //   avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
  //   initials: "AS",
  //   type: "student",
  // }
  // ,{
  //   id: 6,
  //   name: "Adeati Samuel",
  //   email: "maxwellsmith@gmail.com",
  //   role: "Product Designer",
  //   avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
  //   initials: "AS",
  //   type: "student",
  // },{
  //   id: 7,
  //   name: "Adeati Samuel",
  //   email: "maxwellsmith@gmail.com",
  //   role: "Product Designer",
  //   avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
  //   initials: "AS",
  //   type: "student",
  // }
  // ,{
  //   id: 6,
  //   name: "Adeati Samuel",
  //   email: "maxwellsmith@gmail.com",
  //   role: "Product Designer",
  //   avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
  //   initials: "AS",
  //   type: "student",
  // },{
  //   id: 6,
  //   name: "Adeati Samuel",
  //   email: "maxwellsmith@gmail.com",
  //   role: "Product Designer",
  //   avatar: "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
  //   initials: "AS",
  //   type: "student",
  // },
]

export function ApplicationsSection() {
  return (
    <div className=" p-4 h-full">
      <div className="space-y-1">
        <h3 className="text-sm text-gray-500 mb-4">Mentors</h3>

        <div className="space-y-4">
          {applications
            .filter((app) => app.type === "mentor")
            .map((application) => (
              <div key={application.id} className="flex items-center gap-4 flex-wrap">
                <Checkbox id={`application-${application.id}`} className="rounded-sm" />

                <div className="flex flex-1 items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={application.avatar || "/placeholder.svg"} alt={application.name} />
                    <AvatarFallback>{application.initials}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h4 className="font-medium text-gray-800">{application.name}</h4>
                      <p className="text-xs text-gray-500">{application.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-4 text-sm text-red-500 border-red-100 bg-red-50 hover:bg-red-100 hover:text-red-600"
                  >
                    Reject
                  </Button>
                  <Button size="sm" className="h-9 px-4 text-sm bg-purple-600 hover:bg-purple-700">
                    Accept
                  </Button>
                </div>
              </div>
            ))}
        </div>

        {applications.filter((app) => app.type === "mentor").length > 0 && (
          <div className="py-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-100 rounded-md px-3 py-1">
                Product Designer
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100 rounded-md px-3 py-1">
                5years Experience
              </Badge>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-100 rounded-md px-3 py-1 flex items-center gap-1"
              >
                <span className="w-4 h-3 bg-green-100 rounded-sm flex items-center justify-center">
                  <span className="block w-1 h-3 bg-green-500"></span>
                  <span className="block w-1 h-3 bg-white"></span>
                  <span className="block w-1 h-3 bg-green-500"></span>
                </span>
                Lagos, Nigeria
              </Badge>
              <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-100 rounded-md px-3 py-1">
                GMT +1
              </Badge>
            </div>
          </div>
        )}

        <div className="border-t border-gray-100 my-4"></div>

        <h3 className="text-sm text-gray-500 mb-4 mt-[20px]">Students</h3>
        

        
          <div className="space-y-4  ">
  
          {applications
            .filter((app) => app.type === "student")
            .map((application) => (
              <div key={application.id} className="flex items-center flex-wrap gap-4  border-b-[#DBDBDB] border-b-[1px] py-2">
                <Checkbox id={`application-${application.id}`} className="rounded-sm" />

                <div className="flex flex-1 items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={application.avatar || "/placeholder.svg"} alt={application.name} />
                    <AvatarFallback>{application.initials}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h4 className="font-medium text-gray-800">{application.name}</h4>
                      <p className="text-xs text-gray-500">{application.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-4 text-xs text-[#D83535]  border-[#D09696] bg-red-50 hover:bg-red-100 hover:text-red-600"
                  >
                    Reject
                  </Button>
                  <Button size="sm" className="h-9 px-4 text-xs bg-[#6F01D0] hover:bg-purple-700">
                    Accept
                  </Button>
                </div>
              </div>
            ))}
        </div>
    
      </div>
    </div>
  )
}
