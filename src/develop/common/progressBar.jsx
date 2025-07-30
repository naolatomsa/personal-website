import { useEffect, useRef, useState } from "react";

/**
 * Usage:
 * 1) Make your target div scrollable and relative-positioned:
 *    <div ref={boxRef} className="relative max-h-[70vh] overflow-y-auto">...</div>
 * 2) Drop this bar as the FIRST child of that div:
 *    <ScrollProgressBar containerRef={boxRef} />
 */
export default function ScrollProgressBar({
  containerRef, // <-- pass a ref to the scrollable div
  height = 3,
  colorClass = "bg-orange-600",
}) {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const max = el.scrollHeight - el.clientHeight;
        setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
        ticking.current = false;
      });
    };

    // init & listen on the element, not window
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return (
    // absolute so it stays at the very top INSIDE the target div
    <div
      className="absolute w-full max-w-4xl mx-auto top-0 left-0 right-0"
      style={{ height }}
    >
      <div
        className={`${colorClass} h-full`}
        style={{ width: `${progress}%`, transition: "width 80ms linear" }}
      />
    </div>
  );
}
