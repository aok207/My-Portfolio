import { useState, useEffect, useRef } from "react";

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
  const requestRef = useRef();

  const handleMouseMove = (e) => {
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
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition, outerCirclePosition, innerCirclePosition]);

  function isMobile() {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const windowSize = useRef(window.innerWidth);

  useEffect(() => {
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

  // When hovering some elements in the document make the inner circle bigger
  // Get the computed style of the entire document

  // Check if the cursor property is set to "pointer"
  //const isPointerCursor = computedStyle.cursor === "pointer";
  const [isPointerCursor, setIsPointerCursor] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => {
      setIsPointerCursor(true);
    };

    const handleMouseOut = () => {
      setIsPointerCursor(false);
    };

    // Attach the mouseover and mouseout event listeners to all of the elements that has the class hoverable
    document.querySelectorAll(".hoverable").forEach((btn) => {
      btn.addEventListener("mouseover", handleMouseOver);
    });

    document.querySelectorAll(".hoverable").forEach((btn) => {
      btn.addEventListener("mouseout", handleMouseOut);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      document.querySelectorAll(".hoverable").forEach((btn) => {
        btn.removeEventListener("mouseover", handleMouseOver);
      });

      document.querySelectorAll(".hoverable").forEach((btn) => {
        btn.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div
      id="circle"
      style={{
        position: "absolute",
        left: `${outerCirclePosition.x + 10}px`,
        top: `${outerCirclePosition.y + 10}px`,
        zIndex: 999,
      }}
      className={`border border-purple-800 w-[40px] h-[40px] rounded-full pointer-events-none ${
        isMobileDevice ? "hidden" : ""
      }`}
    >
      <div
        style={{
          position: "absolute",
          left: `${
            !isPointerCursor
              ? innerCirclePosition.x + 16
              : innerCirclePosition.x + 12
          }px`,
          top: `${
            !isPointerCursor
              ? innerCirclePosition.y + 16
              : innerCirclePosition.y + 12
          }px`,
          zIndex: 999,
        }}
        className={`rounded-full pointer-events-none bg-purple-700 ${
          !isPointerCursor ? "w-2 h-2" : "w-4 h-4"
        }`}
      ></div>
    </div>
  );
};

export default CursorFollow;
