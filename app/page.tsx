"use client";

import {
  ButtonsSection,
  Navigation,
  ProgramInfo,
  ProgramTextSection,
  RightPanel,
  TextEditorSection,
} from "@/components/dashboard";
import AddSection from "@/components/dashboard/add-section";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TourGuide from "@/components/dashboard/tour-guide";

const Page = () => {
  const container = useRef(null);
  const [tourStarted, setTourStarted] = useState(false);

  useEffect(() => {
    setTourStarted(true);
  }, []);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 },
        "+=0.5"
      );
      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.1 },
        "-=0.7"
      );
      tl.fromTo(
        ".hero__button",
        { scale: 1.1 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.6"
      );
    },
    { scope: container }
  );

  const handleEndTour = () => {
    setTourStarted(false);
  };

  return (
    <>
      {tourStarted && (
        <TourGuide
          start={tourStarted}
          setStartTour={setTourStarted}
          onTourEnd={handleEndTour}
        />
      )}

      <div
        className="w-full dark:bg-foreground lg:w-[calc(100%-120px)] lg:ml-[120px] grid grid-cols-1 md:grid-cols-2 gap-8 py-6"
        ref={container}
      >
        <div className="w-full flex flex-col gap-y-20 lg:px-6 bg-background dark:bg-foreground shadow-box-shadow">
          <Navigation className="hero__glow" />
          <ProgramInfo className="hero__heading" />
          <TextEditorSection className="hero__body" />
          <AddSection />
          <div className="flex flex-col gap-2">
            <ProgramTextSection text="Program Information Text 1" />
            <ProgramTextSection text="Program Information Text 2" />
          </div>
          <ButtonsSection className="hero__button" />
        </div>
        <RightPanel className="hero__image" />
      </div>
    </>
  );
};

export default Page;
