"use client";
import hooks from "@/app/utils/hooks";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Button from "../Button";

const HomeScreen: React.FC = () => {
  const { push } = useRouter();
  const { width, height } = hooks.useWidthAndHeight();
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-midnightPurple text-white">
      {isConfettiActive && <Confetti width={width} height={height} />}
      <h1 className="text-5xl font-bold">WELC😊ME</h1>
      <Button
        whiteBorder
        borderRadius="rounded-lg"
        onClick={() => push("/create-program")}
      >
        Click to view task implementation
      </Button>
    </div>
  );
};

export default HomeScreen;
