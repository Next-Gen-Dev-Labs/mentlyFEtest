"use client";
import { SectionHeader } from "@/components/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { groupCalldata } from "@/data";
import { motion } from "motion/react";
import { GroupCallCard } from "./group-call-card";

export const GroupCalls = () => {
  return (
    <motion.div
      className="relative bg-white p-2 rounded-sm"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      aria-labelledby="group-calls-header"
    >
      <SectionHeader title="Group Calls" />
      <div
        className="relative flex w-full"
      >
        <Carousel opts={{ align: "start" }} className="w-full relative">
          <CarouselContent className="flex w-full">
            {groupCalldata.map((item, index) => (
              <CarouselItem
                key={index}
                aria-label={`Group call: ${item.title}, ${item.date}`}
                className="basis-full sm:basis-1/2 md:basis-2/3 xl:basis-2/3 grow"
              >
                <GroupCallCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Previous group call"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
          />
          <CarouselNext
            aria-label="Next group call"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
          />
        </Carousel>
      </div>
    </motion.div>
  );
};
