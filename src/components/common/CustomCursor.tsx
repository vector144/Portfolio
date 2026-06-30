import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let mouseX = 0;
    let mouseY = 0;
    let rafId: number;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      setPosition({ x: mouseX, y: mouseY });
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener("mousemove", updateCursor);
    rafId = requestAnimationFrame(animate);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, .badge, .project-item"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? "hover" : ""}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      <div
        className={`cursor-outline ${isHovering ? "hover" : ""}`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
