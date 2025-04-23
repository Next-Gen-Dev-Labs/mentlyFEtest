import { Button } from "@/app/components/ui/Button";
import { AlignJustify, Images, LayoutList, X } from "lucide-react";
import { useState } from "react";

export function DashboardControls() {
  const [widget, setWidget] = useState(false);

  return (
    <>
      <section
        aria-label="Dashboard Controls"
        className="border-b flex items-center justify-end p-4 gap-8 mt-20"
      >
        <Button className="text-[#A4A5B8]" aria-label="Layout List">
          <LayoutList height={24} width={24} />
        </Button>
        <Button
          aria-label="Gallery List"
          className="bg-[#6F01D01C] flex justify-center items-center h-[26px] w-[30px] rounded-[2px] text-purple-700 border-[#6F01D0] border"
        >
          <Images height={13.5} width={21} />
        </Button>
        <Button
          onClick={() => {
            setWidget(true);
          }}
          className="font-bold text-[#1F0954]"
        >
          Manage Widgets
        </Button>
      </section>
      {widget && (
        <aside className="bg-white/30 backdrop-blur-sm fixed top-0 left-0 w-full h-full z-50 flex justify-end">
          <div className="bg-white max-w-[450px] h-full p-6 overflow-y-auto">
            <div
              onClick={() => {
                setWidget(false);
              }}
              className="flex justify-end cursor-pointer border-b border-[#D7D7D7] py-2"
            >
              <X color="#8D8D8D" />
            </div>
            <p className="text-[#6F01D0] text-[32px] font-bold mt-12">
              Manage Widget
            </p>
            <p className="text-[12px] text-[#374557] my-4">
              Personalize your dashboard by managing widgets add, remove or
              reorder them to fit your workflow
            </p>
            <div className="my-8 flex flex-col gap-8 h-[320px] overflow-y-auto">
              <div className="flex justify-between items-center">
                <label htmlFor="Programs" className="flex gap-2 items-center">
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Programs
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Programs"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="Group Calls"
                  className="flex gap-2 items-center"
                >
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Group Calls
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Group Calls"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Mentors" className="flex gap-2 items-center">
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Mentors
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Mentors"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="Recent Activities"
                  className="flex gap-2 items-center"
                >
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Recent Activities
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Recent Activities"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="Application"
                  className="flex gap-2 items-center"
                >
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Application
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Application"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Earnings" className="flex gap-2 items-center">
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Earnings
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Earnings"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Forum" className="flex gap-2 items-center">
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">Forum</p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Forum"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="Program Analysis"
                  className="flex gap-2 items-center"
                >
                  <AlignJustify height={16} width={16} color="black" />
                  <p className="text-[#4F4F4F] font-bold text-[15px]">
                    Program Analysis
                  </p>
                </label>
                <input
                  type="checkbox"
                  name="widgets"
                  id="Program Analysis"
                  className="w-4.5 h-4.5 greencheckbox"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <Button className="text-[14px] font-bold text-[#6F01D0] h-11 w-1/2 rounded-[7px] border-[0.8px] border-[#6F01D0]">
                Save Changes
              </Button>
              <Button className="text-[14px] font-bold h-11 w-1/2 text-white rounded-[7px] bg-[#6F01D0]">
                Reset to Default
              </Button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
