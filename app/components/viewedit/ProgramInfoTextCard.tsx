import { ProgramInfoTextCardProps } from "@/app/types";

const ProgramInfoTextCard: React.FC<ProgramInfoTextCardProps> = ({
  title,
  content,
}) => {
  return (
    <div className="rounded-2xl p-4 flex flex-col gap-8 bg-progInfoTextCardBg border border-progInfoTextCardBorder">
      <h4 className="text-midnightPurple font-semibold text-xl">{title}</h4>
      <>{content}</>
    </div>
  );
};

export default ProgramInfoTextCard;
