import HintIcon from "../assets/icons/HintIcon";

const InputHint: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex items-center rounded-sm bg-blue-200 h-14 px-2">
      <HintIcon />
      <p className="w-[90%] ml-auto text-slateLavendar text-xs">{message}</p>
    </div>
  );
};

export default InputHint;
