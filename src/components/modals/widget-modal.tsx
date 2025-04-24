import { IoIosMenu } from "react-icons/io";

const widgets = [
  "Programs",
  "Group Calls",
  "Mentors",
  "Recent Activities",
  "Earnings",
  "Forum",
  "Program Analysis",
];

function WidgetModal() {
  return (
    <div className="border-t pt-4 border-gray-300 flex flex-col gap-y-5">
      <p className="font-semibold text-lg md:text-2xl lg:text-3xl text-purple-800">
        Manage Widget
      </p>
      <p className="text-gray-800 text-xs">
        Personalize your dashboard by managing widgets add, remove, or reorder
        them to fit your workflow.
      </p>

      {/*select widgets */}
      <ul className="space-y-4 mt-2">
        {widgets.map((widget, i) => (
          <li className="flex items-center justify-between" key={i}>
            <div className="flex items-center gap-x-4">
              <IoIosMenu size={20} />
              <p className="text-gray-500 font-semibold text-xs md:text-base">
                {widget}
              </p>
            </div>
            {/*check */}
            <input
              type="checkbox"
              className="h-3.5 accent-green-500 text-white w-3.5 rounded cursor-pointer"
            />
          </li>
        ))}
      </ul>

      {/*save and reset */}
      <div className="flex justify-center  gap-x-3 items-center mt-2">
        <button className="focus:outline-none rounded-md bg-[#6f01d0] py-2 text-white border border-[#6f01d0] text-xs font-medium text-[10px] px-2 sm:text-sm ">
          Save Changes
        </button>
        <button className="focus:outline-none rounded-md text-[#6f01d0] py-2 px-2  border border-[#6f01d0] text-xs font-medium text-[10px] sm:text-sm">
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default WidgetModal;
