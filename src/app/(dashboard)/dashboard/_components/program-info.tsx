import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import Info from "./info";
import "react-quill-new/dist/quill.snow.css";
import Accordion from "@/components/common/accordion";
import { ArrowDown, More } from "iconsax-react";
import { DropdownMenu } from "@/components/common/dropdown";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <>loading..</>,
});

interface Section {
  title: string;
  content: string;
  show: boolean;
}

function ProgramInfo() {
  const [sectionTitle, setSectionTitle] = useState("");
  const [content, setContent] = useState("");
  const [showPublished, setShowPublished] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);

  const handleAddSection = () => {
    if (sectionTitle && content) {
      if (sections.length < 3) {
        //* maximum number of sections to add is 3
        setSections([
          ...sections,
          { title: sectionTitle, content, show: showPublished },
        ]);
      }
    }

    setSectionTitle("");
    setContent("");
    setShowPublished(false);
  };

  const handleDeleteSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };
  return (
    <Fragment>
      <h1 className="text-2xl font-bold text-gray-900">Program Information</h1>

      <div className="space-y-4">
        <div className="space-y-3">
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Describe Section Title e.g What you stand to learn"
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
          />

          <Info text="Provide your prefered title for this section i.e What’s in this Program for you?" />
        </div>

        <div className="space-y-3">
          <div className="">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={(value) => setContent(value)}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                ],
              }}
              placeholder="Insert text"
              className="rounded"
            />
          </div>

          <Info text="Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.." />
        </div>

        <div className="space-y-4">
          {sections.length < 3 && (
            <button
              onClick={handleAddSection}
              className="w-full py-3 border border-black rounded-lg text-gray-600 hover:bg-gray-50 flex flex-col items-center"
            >
              <span className="text-base">+ Add new section</span>
              <span className="italic text-xs">
                (maximum number of sections to add is 3)
              </span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showPublished}
            onChange={(e) => setShowPublished(e.target.checked)}
            className="rounded"
          />
          <label className="text-sm text-gray-600">
            Show this section when Published
          </label>
        </div>

        <div className="flex justify-between mt-8">
          <button className="text-gray-600">Go Back</button>
          <button className="bg-indigo-900 text-white px-6 py-2 rounded-md">
            Save & Proceed
          </button>
        </div>
      </div>

      {/* sections */}
      <div className="">
        <Accordion
          items={sections.map((section, index) => ({
            id: section.title + index,
            header: (
              <div className="flex items-center justify-between">
                <span className="text-indigo-900 font-medium text-base">
                  {section.title}
                </span>
                <div className="flex gap-3">
                  <ArrowDown size={20} color="#777795" />

                  <div className="">
                    <DropdownMenu
                      trigger={
                        <More size={20} color="#777795" className="rotate-90" />
                      }
                      items={[
                        {
                          label: "Edit",
                          onClick: () => console.log("Edit"),
                        },
                        {
                          label: "Delete",
                          onClick: () => handleDeleteSection(index),
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            ),
            content: (
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ),
          }))}
        />
      </div>
    </Fragment>
  );
}

export default ProgramInfo;
