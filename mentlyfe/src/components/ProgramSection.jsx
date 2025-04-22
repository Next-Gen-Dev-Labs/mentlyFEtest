import ProgramCard from "./ProgramCard";

export default function ProgramSection() {
  const programs = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      description:
        "This program is a hands-on guide designed for designers who want to master the fundamentals of UI/UX and apply it to their designs. This practical approach...",
      mentors: 3,
      badges: ["Hot"]
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      mentors: 1,
      badges: ["New"]
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Programs</h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
