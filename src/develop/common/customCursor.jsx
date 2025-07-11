import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const innerX = useSpring(mouseX, { stiffness: 1000, damping: 100 });
  const innerY = useSpring(mouseY, { stiffness: 1000, damping: 100 });

  const outerX = useMotionValue(-100);
  const outerY = useMotionValue(-100);
  const outerSpringX = useSpring(outerX, { stiffness: 150, damping: 20 });
  const outerSpringY = useSpring(outerY, { stiffness: 150, damping: 20 });

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [idleTimeout, setIdleTimeout] = useState(null);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      mouseX.set(x);
      mouseY.set(y);

      outerX.set(x);
      outerY.set(y);

      // Clear previous timeout and reset idle fallback
      if (idleTimeout) clearTimeout(idleTimeout);
      const newTimeout = setTimeout(() => {
        outerX.set(mouseX.get());
        outerY.set(mouseY.get());
      }, 100); // return to center if no movement for 100ms

      setIdleTimeout(newTimeout);
    };

    const click = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 150);
    };

    const checkHover = (e) => {
      const target = e.target;
      const interactiveTags = [
        "A",
        "BUTTON",
        "INPUT",
        "TEXTAREA",
        "SELECT",
        "LABEL",
      ];

      const isInteractive = interactiveTags.includes(target.tagName);

      const isInInteractive = target.closest(
        "button, a, input, textarea, select, label"
      );

      setHovering(isInteractive || isInInteractive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [mouseX, mouseY, outerX, outerY, idleTimeout]);

  const outerSize = hovering ? 20 : clicking ? 20 : 100;
  const innerSize = hovering ? 15 : clicking ? 6 : 20;

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] md:flex hidden rounded-full border-2 dark:border-white pointer-events-none mix-blend-difference"
        style={{
          width: outerSize,
          height: outerSize,
          translateX: outerSpringX,
          translateY: outerSpringY,
          marginLeft: -outerSize / 2,
          marginTop: -outerSize / 2,
        }}
      />
      {/* Inner fast dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          width: innerSize,
          height: innerSize,
          translateX: innerX,
          translateY: innerY,
          marginLeft: -innerSize / 2,
          marginTop: -innerSize / 2,
        }}
      />
    </>
  );
}
