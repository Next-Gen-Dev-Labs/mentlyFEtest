"use client"
import {
  UserGroupIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Subheading from "../components/Header/Subheading";
import AppMentorCard from "../components/Card/AppMentorCard";
import AppMentorCard2 from '../components/Card/AppMentCard2'
// import SectionHeader from "../components/Header/SectionHeader";
import SectionHeader from "../components/Header/SectionHeader";

const Applications = () => {
  return (
    <div className="bg-white border rounded-xl p-4 col-span-3 shadow-sm">
       <SectionHeader
        title="Applicaions"
        onClick={() => console.log("See all clicked")}
        showSeeAll
      />
      <div className="space-y-4">
        <div>
          <Subheading subheading={"Mentors"} />
          <AppMentorCard2
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            profile="/asset/m1.png"
          />
         
        </div>
        <Subheading subheading={"Students"} />
        <div className="flex flex-col gap-3  py-3">

      
        <AppMentorCard
          name="Adeati Samuel"
          email="maxwellsmith@gmail.com"
          profile="/asset/m2.png"
          
        />
        

        <AppMentorCard
          name="Maxwell Smith"
          email="maxwellsmith@gmail.com"
          profile="/asset/m1.png"
        />
        <AppMentorCard
          name="Adeati Samuel"
          email="maxwellsmith@gmail.com"
          profile="/asset/m2.png"
        />
        <AppMentorCard
          name="Maxwell Smith"
          email="maxwellsmith@gmail.com"
          profile="/asset/m1.png"
        />
        </div>
      </div>
    </div>
  );
};

export default Applications;
