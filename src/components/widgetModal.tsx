
import Checkbox from "./checkbox";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function WidgetModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end backdrop-blur-[5px] bg-white/10 transition-transform duration-300 ">
        <div className="bg-white w-[350px] h-full p-6 transition-transform duration-300 ease-in-out transform translate-x-0 shadow-lg overflow-y-auto">
          <div className="flex justify-end items-center p-4 border-b-[1px] border-[#D7D7D7]">
            <button onClick={onClose} className="">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#8D8D8D"
                />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-[28px] font-[700] leading-[100%] text-(--primary) pt-[30px]">
              Manage Widget
            </h2>
            <p className="text-[12px] font-[400] leading-[140%] py-4 text-[#374557]">
              Personalize your dashboard by managing widgets add, remove, or
              reorder them to fit your workflow.
            </p>
          </div>

          {/* section */}
          <ul className="space-y-3">
            {[
              "Programs",
              "Group Calls",
              "Mentors",
              "Recent Activities",
              "Application",
              "Earnings",
              "Forum",
              "Program Analysis",
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-[16px]">
                  <span>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6.5H11M1 3.5H11M1 0.5H11M1 9.5H11"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#4F4F4F] text-[14px] leading-[150%] font-[700] py-2">
                    {item}
                  </span>
                </div>
                <Checkbox />
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-between gap-[24px]">
            <button className="bg-(--primary) w-full text-white h-[42px] rounded-[6px] text-[13px] font-[700] leading-[100%] tracking-[2%]">
              Save Changes
            </button>
            <button className="border border-(--primary) text-(--primary) w-full  h-[42px] rounded-[6px] text-[13px] font-[700] leading-[100%] tracking-[2%] ">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
