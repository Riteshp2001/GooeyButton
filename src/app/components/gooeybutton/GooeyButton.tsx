"use client";

import React, { useEffect, useRef } from "react";

const GooeyButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const moveBg = (e: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      button.style.setProperty("--x", `${x}`);
      button.style.setProperty("--y", `${y}`);
    };

    const intro = () => {
      let i = 4;
      button.style.setProperty("--a", "100%");
      intervalRef.current = setInterval(() => {
        button.style.setProperty("--x", `${((Math.cos(i) + 2) / 3.6) * 100}`);
        button.style.setProperty("--y", `${((Math.sin(i) + 2) / 3.6) * 100}`);
        i += 0.03;
        if (i > 11.5) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          button.style.setProperty("--a", "");
        }
      }, 16);
    };

    const handlePointerOver = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      button.style.setProperty("--a", "");
    };

    button.addEventListener("pointermove", moveBg);
    button.addEventListener("pointerover", handlePointerOver);
    intro();

    return () => {
      button.removeEventListener("pointermove", moveBg);
      button.removeEventListener("pointerover", handlePointerOver);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <button ref={buttonRef} type="button" className="gooey-button">
        Gooey Button
      </button>

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
    </>
  );
};

export default GooeyButton;
