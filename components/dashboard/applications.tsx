import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Menu } from "lucide-react";

interface Applicant {
  name: string;
  email: string;
  role: "Mentor" | "Student";
  tags?: string[];
  image?: string;
}

const applicants: Applicant[] = [
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Mentor",
    tags: [
      "Product Designer",
      "4 years Experience",
      "🇳🇬 Lagos, Nigeria",
      "GMT +1",
    ],
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    role: "Student",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Student",
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    role: "Student",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    role: "Student",
  },
];

export default function ApplicationsList() {
  const grouped = applicants.reduce<Record<string, Applicant[]>>(
    (acc, applicant) => {
      if (!acc[applicant.role]) acc[applicant.role] = [];
      acc[applicant.role].push(applicant);
      return acc;
    },
    {}
  );

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row justify-between items-center">
        <h2 className="text-lg flex items-center  gap-4 font-semibold">
          <Menu className="h-5 w-5 text-gray-500" />
          Applications
        </h2>
        <a href="#" className="text-purple-600 font-medium">
          See all
        </a>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(grouped).map(([role, users]) => (
          <div key={role}>
            <h3 className="text-sm text-muted-foreground font-semibold mb-2">
              {role}s
            </h3>
            <div className="space-y-4">
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between border rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <Checkbox className="mt-1" />
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={user.image} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                        {user.tags && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {user.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-red-400 text-red-500 hover:bg-red-50"
                    >
                      Reject
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Accept
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
