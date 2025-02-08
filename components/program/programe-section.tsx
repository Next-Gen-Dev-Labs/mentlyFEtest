"use client";

import { ProgramFooter } from "@/components/program/footer";
import { ProgramHeader } from "@/components/program/header";
import { SectionList } from "@/components/program/section-list";
import { SectionTitle } from "@/components/program/section-title";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Checkbox } from "@/components/ui/checkbox";
import { Editor } from "../editor/editor";

export default function ProgramInformation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 w-full bg-[#FDFDFD] lg:col-span-3"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <ProgramHeader />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SectionTitle />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Callout>
            {`Provide your prefered title for this section i.e What's in this
            Program for you?`}
          </Callout>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Editor />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Callout>
            Provide a clear and concise description/information of your program.
            This can include objectives, goals, necessary resources, or any
            specific instructions.
          </Callout>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="flex w-full flex-col items-center gap-0 border-dashed py-8 text-gray-700 hover:bg-gray-50"
          >
            <div className="text-[#494A71]">
              <span className="text-lg">+</span>
              <span>Add new section</span>
            </div>
            <span className="text-sm text-gray-500">
              (maximum number of sections to add is 3)
            </span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Checkbox
            id="show-published"
            className="border-gray-300 data-[state=checked]:border-[#1D1355] data-[state=checked]:bg-[#1D1355]"
          />
          <label
            htmlFor="show-published"
            className="select-none text-sm text-gray-700"
          >
            Show this section when Published
          </label>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <SectionList />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <ProgramFooter />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
