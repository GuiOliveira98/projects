import { useEffect, useState } from "react";

import cursor from "./cursor.png";
import cursorPressed from "./cursor-pressed.png";

export type Position = { x: number; y: number };

export function Cursor() {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => setIsClick(true);
  const onRelease = () => setIsClick(false);

  const [isMouseVisible, setIsMouseVisible] = useState(true);
  const showMouse = () => setIsMouseVisible(true);
  const hideMouse = () => setIsMouseVisible(false);

  const [screenPosition, setScreenPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const updatePosition = (ev: MouseEvent) => {
    setScreenPosition({ x: ev.x, y: ev.y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", showMouse);
    window.addEventListener("mouseout", hideMouse);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("mouseup", onRelease);
  }, []);

  if (!isMouseVisible) {
    return <></>;
  }

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        left: screenPosition.x,
        top: screenPosition.y,
        pointerEvents: "none",
      }}
    >
      <img
        src={isClick ? cursorPressed : cursor}
        style={{
          imageRendering: "pixelated",
          position: "absolute",
          width: 25,
          left: -10,
        }}
      />
    </div>
  );
}
