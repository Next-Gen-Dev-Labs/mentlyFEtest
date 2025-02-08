import { Briefcase, Calendar, Location } from "iconsax-react";
import { ReactNode } from "react";

export default function Card() {
  return (
    <div className="w-full max-w-96 shadow-md text-mently-blue font-bold flex flex-col justify-center gap-3 text-sm p-3 h-44">
      <Container>
        <Briefcase size={24} variant="Linear" className="stroke-mently-blue" />
        <span>Mentorship Program</span>
      </Container>
      <Container>
        <Calendar size={24} variant="Linear" className="stroke-mently-blue" />
        <span>21/4/2024-21/5/2024</span>
      </Container>
      <Container>
        <Location size={24} variant="Linear" className="stroke-mently-blue" />
        <span>In Person</span>
      </Container>
    </div>
  );
}


function Container({children}: {children: ReactNode}) {
  return (
    <span className="flex items-center gap-6">
      {children}
    </span>
  )
}