import Right from "./right";
import Left from "./left";

export default function ProgramView() {
  return (
    <div className="grid grid-cols-1 x-sm:grid-cols-[auto_1fr]">
      <Left />
      <Right />
    </div>
  );
}
