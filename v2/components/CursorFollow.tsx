"use client";
import React, { useState, useEffect, useRef } from "react";

const CursorFollow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [outerCirclePosition, setOuterCirclePosition] = useState({
    x: 0,
    y: 0,
  });
  const [innerCirclePosition, setInnerCirclePosition] = useState({
    x: 0,
    y: 0,
  });
  const requestRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    // Update the mousePosition state based on the current mouse position
    // Subtract 30 from both x and y to adjust for the radius
    setMousePosition({ x: e.pageX - 30, y: e.pageY - 30 });
  };

  // This function will animate both circles
  const animate = () => {
    setOuterCirclePosition((prevOuterCirclePosition) => ({
      x:
        prevOuterCirclePosition.x +
        (mousePosition.x - prevOuterCirclePosition.x) / 2,
      y:
        prevOuterCirclePosition.y +
        (mousePosition.y - prevOuterCirclePosition.y) / 2,
    }));

    const maxInnerRadius = 20;
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - outerCirclePosition.x, 2) +
        Math.pow(mousePosition.y - outerCirclePosition.y, 2)
    );

    if (distance <= 30) {
      // Ensure the inner circle stays within the boundaries of the outer circle
      setInnerCirclePosition({
        x: mousePosition.x - outerCirclePosition.x,
        y: mousePosition.y - outerCirclePosition.y,
      });
    } else if (distance > 30) {
      // If the distance is greater than the outer circle radius, place the inner circle at the maximum radius
      setInnerCirclePosition({
        x:
          (mousePosition.x - outerCirclePosition.x) *
          (maxInnerRadius / distance),
        y:
          (mousePosition.y - outerCirclePosition.y) *
          (maxInnerRadius / distance),
      });
    } else {
      setInnerCirclePosition({
        x: mousePosition.x,
        y: mousePosition.y,
      });
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current as number);
    };
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current as number);
    };
  }, [mousePosition, outerCirclePosition, innerCirclePosition]);

  function isMobile() {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const windowSize = useRef(
    typeof window !== "undefined" ? window.innerWidth : 1080
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkIsMobile = () => {
      setIsMobileDevice(isMobile() || window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    const handleResize = () => {
      windowSize.current = window.innerWidth;
      checkIsMobile();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="circle"
        style={{
          position: "absolute",
          left: `${outerCirclePosition.x + 10}px`,
          top: `${outerCirclePosition.y + 10}px`,
          zIndex: 999,
        }}
        className={`relative border dark:shadow-purple-700 border-purple-800 w-[40px] h-[40px] rounded-full pointer-events-none ${
          isMobileDevice ? "hidden" : ""
        }`}
      >
        <div
          style={{
            position: "absolute",
            left: `${innerCirclePosition.x + 16}px`,
            top: `${innerCirclePosition.y + 16}px`,
            zIndex: 999,
          }}
          className={`rounded-full pointer-events-none bg-purple-700 transition-transform duration-300 w-2 h-2 transform scale-100"
          }`}
        ></div>
        <div className="dark:blur-xl bg-purple-600/50 dark:w-[60px] dark:h-[60px] rounded-full absolute -top-[30%] -left-[30%]"></div>
      </div>
    </>
  );
};

export default CursorFollow;
