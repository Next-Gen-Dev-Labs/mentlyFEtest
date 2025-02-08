import { ArrowDropDown } from "@/components/icons/arrowdown";
import Info from "@/components/Info";
import TextArea from "@/components/TextArea";

import React from "react";

export default function Middle() {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-gray-900 text-3xl capitalize">
        program information
      </h2>
      <small className="text-gray-500 capitalize">describe section title</small>

      <form className="grid grid-cols-1 gap-2">
        <div className="flex items-center border border-mently-blue/50 rounded-md px-2 py-3 mt-2">
          <span className="border-2 border-dashed border-mently-blue px-2">
            T
          </span>
          <button>
            <ArrowDropDown className="fill-gray-700 ml-2" />
          </button>
          <input
            className="w-full pl-4 placeholder:text-sm border-none outline-none"
            type="text"
            placeholder="Describe Section Title e.g What you stand to learn"
          />
        </div>
        <Info info="Provide your prefered title for this section i.e Whats in this Program for you" />

        {/* text area */}
        <TextArea />
        <Info info="Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions." />

        {/* submit  btn */}
        <div className="mt-2 flex flex-col gap-2">
          <button className="flex flex-col items-center justify-center border h-[64px] border-mently-blue/50 font-medium text-mently-blue w-full rounded-sm min-w-80">
            <span className="flex items-center gap-2">+ <span>Add new section</span></span>
            <small>(maximum number of sections to add is 3)</small>
          </button>
          <div className="flex items-baseline gap-1">
            <input type="checkbox" name="show_section" id="show_secton" />
            <label htmlFor="show_section" className="text-gray-800 font-medium text-sm">
              Show this section when published
            </label>
          </div>
        </div>

        {/* end */}
      </form>
    </section>
  );
}
