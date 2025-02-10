import ProgramInfoEditor from "../components/editor";
import ViewEdit from "../components/viewedit";

const page = () => {
  return (
    <div className="flex w-full gap-4 flex-col lg:flex-row">
      <ProgramInfoEditor />
      <ViewEdit />
    </div>
  );
};

export default page;
