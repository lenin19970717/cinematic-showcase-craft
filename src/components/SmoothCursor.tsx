import { useEffect, useState } from "react";

export function SmoothCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", updateCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Don't show on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full bg-primary mix-blend-difference transition-transform duration-75 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          left: position.x - 6,
          top: position.y - 6,
          width: 12,
          height: 12,
        }}
      />
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border-2 border-primary/50 transition-all duration-300 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-150 border-accent" : "scale-100"}`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}
