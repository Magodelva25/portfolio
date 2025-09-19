import { useEffect, useRef } from "react";
import "./../styles/App.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
      }

      const target = document.elementFromPoint(x, y);
      const isInteractive = target?.tagName === "H1" || target?.classList.contains("cursor-target");

      cursor?.classList.toggle("enlarged", isInteractive);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
