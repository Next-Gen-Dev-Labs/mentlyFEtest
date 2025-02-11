import React, { useEffect, useState, useMemo } from "react";
import type { CallBackProps, Step } from "react-joyride";
import Joyride, { EVENTS, STATUS } from "react-joyride";

interface TourGuideProps {
  start: boolean;
  setStartTour: (value: boolean) => void;
  onTourEnd: () => void;
}

const TourGuide = ({ start, setStartTour, onTourEnd }: TourGuideProps) => {
  const [progress, setProgress] = useState<number>(1);
  const totalSteps: number = 4;

  const generateSteps = (val: number): Step[] => [
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Settings & Preferences
          </p>
          <p className="text-sm">
            Click here to access various settings options.
          </p>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-neutral-400">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "right",
      target: "#step-0",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">Section Title</p>
          <p className="text-sm">
            Enter a meaningful title for this section to help users understand
            its purpose.
          </p>
          <div className="absolute bottom-[22px] left-[35%] text-sm text-neutral-400">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "right",
      target: "#step-1",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">Text Formatting</p>
          <p className="text-sm">
            Use the text editor to style your content with bold, italics, lists,
            and more.
          </p>
          <div className="absolute bottom-[22px] left-[35%] text-sm text-neutral-400">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "left",
      target: "#step-2",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Edit Section Content
          </p>
          <p className="text-sm">
            Click here to modify the content of this section as needed.
          </p>
          <div className="absolute bottom-[22px] left-[35%] text-sm text-neutral-400">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "right",
      target: "#step-3",
    },
  ];

  const memoizedSteps = useMemo(() => generateSteps(progress), [progress]);

  const [state, setState] = useState({
    run: start,
    stepIndex: 0,
    steps: memoizedSteps,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      steps: memoizedSteps,
    }));
  }, [memoizedSteps]);

  useEffect(() => {
    setState((prevState) => {
      if (!start || prevState.run) return prevState;
      return { ...prevState, run: true, stepIndex: 0 };
    });
  }, [start]);

  const handleJoyrideCallback = async (data: CallBackProps) => {
    const { status, type, index } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setState((prevState) => ({
        ...prevState,
        run: false,
        stepIndex: 0,
      }));
      setStartTour(false);
      onTourEnd();
    } else if (type === EVENTS.STEP_BEFORE) {
      setProgress(index + 1);
    }
  };

  return (
    <Joyride
      continuous
      callback={handleJoyrideCallback}
      run={state.run}
      steps={state.steps}
      scrollToFirstStep
      hideCloseButton={false}
      disableCloseOnEsc
      disableOverlayClose
      spotlightPadding={10}
      showSkipButton
      styles={{
        buttonNext: {
          backgroundColor: "#1F0954",
          borderRadius: "5px",
          color: "#FFFFFF",
          padding: "8px 12px",
        },
        buttonSkip: { color: "#A3A3A3" },
        options: {
          zIndex: 100,
          arrowColor: "#ffffff",
          backgroundColor: "#ffffff",
          textColor: "#000000",
          overlayColor: "rgba(0, 0, 0, 0.3)",
          primaryColor: "#1F0954",
        },
      }}
    />
  );
};

export default TourGuide;
