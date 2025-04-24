import GroupCallCard from "../components/Card/GroupCard";
import SectionHeader from "./Header/SectionHeader";

export default function Dashboard() {
  return (
    <>
      <div className="bg-white p-4">
        <SectionHeader title={"Group call"} />
        <div className=" flex items-center gap-3 shrink-0 overflow-x-scroll md:overflow-y-auto md:[scrollbar-width:none] md:[-ms-overflow-style:none] [&::-webkit-scrollbar]:md:hidden ">
          <GroupCallCard
            imageSrc="/asset/program2.png"
            isOngoing={true}
            title="Weekly Meeting - Product Demo Review with Testers"
            date="Mon, Jul 30, 2024"
            time="9:00 - 11:00AM"
            group="UX Strategy Study group"
            mentorAvatars={[
              "/asset/group-mentor.png",
              "/asset/group-mentor2.png",
            ]}
            status={"Ongoing"}
          />
          <GroupCallCard
            imageSrc="/asset/group-banner.png"
            isOngoing={true}
            title="Weekly Meeting - Product Demo Review with Testers"
            date="Mon, Jul 30, 2024"
            time="9:00 - 11:00AM"
            status={"Upcoming"}
            group="UX Strategy Study group"
            mentorAvatars={[
              "/asset/group-mentor.png",
              "/asset/group-mentor2.png",
            ]}
          />
          <GroupCallCard
            imageSrc="/asset/group-banner2.png"
            isOngoing={true}
            title="Weekly Meeting - Product Demo Review with Testers"
            date="Mon, Jul 30, 2024"
            time="9:00 - 11:00AM"
            group="UX Strategy Study group"
            status={"Ongoing"}
            mentorAvatars={[
              "/asset/group-mentor.png",
              "/asset/group-mentor2.png",
            ]}
          />
        </div>
      </div>
    </>
  );
}
