import { IconInfoCircle } from "@tabler/icons-react";

interface AlertProps {
  // Add any props here if needed
  message: string;
  icon?: any;
}

export function Alert({ message, icon }: AlertProps) {
  return (
    <div className="flex bg-blue-200 p-3 gap-3 my-3 items-center">
      <IconInfoCircle
        size={25}
        className="text-blue-600 justify-center items-center"
      />
      <p className="text-sm leading-none text-neutral-500">
        {message}
        {/* Provide your prefered title for this section i.e What's in this */}
        {/* Program for you? */}
      </p>
    </div>
  );
}
