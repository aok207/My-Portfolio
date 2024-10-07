"use client";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        return prev >= 90 ? 90 : prev + 10;
      });
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="z-[9999] h-1 fixed top-0 left-0 bg-purple-600 transition-all ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
