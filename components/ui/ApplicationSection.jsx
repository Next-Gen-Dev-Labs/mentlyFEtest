import ApplicantCard from "@/components/ui/ApplicationCard";

const ApplicationSection = ({ section, applications, onSelect }) => {
    return (
        <div className="mt-5 px-4">
            <h2 className="text-xs text-[#7D8DA6] mb-2">{section}</h2>
            <div className="bg-white rounded-lg ">
                {applications.map(application => (
                    <ApplicantCard
                        key={application.id}
                        application={application}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default ApplicationSection;