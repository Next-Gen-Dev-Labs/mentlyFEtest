import { useState, useEffect } from "react";
import { formatTime } from "./helpers";
import { useDashboardContext } from "../context/Provider";

const hooks = {
  useCurrentTime: (): { currentTime: string } => {
    const [currentTime, setCurrentTime] = useState<string>(
      formatTime(new Date())
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(formatTime(new Date()));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return { currentTime };
  },

  usePreventScrolling: () => {
    const { contextState } = useDashboardContext();
    const { modalName } = contextState;

    useEffect(() => {
      const appBody = document.querySelector("body");
      if (appBody) {
        appBody.style.overflow = !!modalName ? "hidden" : "auto";
      }

      return () => {
        if (appBody) appBody.style.overflow = "auto";
      };
    }, [modalName]);
  },
  useWidthAndHeight: () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return { width, height };
  },
};

export default hooks;
