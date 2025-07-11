import { useEffect, useState } from "react";

export default function MouseGlow({ isDark }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const glowColor = isDark ? "#FFFFFF14" : "#00000040";

  return (
    <>
      {/* Dot pattern overlay */}
      <div
        className="md:flex hidden  pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Mouse-following glow */}
      <div
        className="md:flex hidden  pointer-events-none fixed inset-0 z-0"
        style={
          isDark
            ? {
                background: `radial-gradient(400px at ${position.x}px ${position.y}px, #00000040 , transparent 80%)`,
              }
            : {
                background: `radial-gradient(400px at ${position.x}px ${position.y}px, #FFFFFF14, transparent 80%)`,
              }
        }
      />
    </>
  );
}
