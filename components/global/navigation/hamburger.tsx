import React from "react";

export default function Hamburger() {
  return (
    <>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 49 20"
      >
        <defs>
          <style>{`
      .st0 {
        fill: #fff;
        stroke: #231f20;
        stroke-width: 6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    `}</style>
        </defs>
        <line className="st0" x1="0.5" y1="0" x2="48.5" y2="0" />
        <line className="st0" x1="0.5" y1="0" x2="48.5" y2="20" />
      </svg>
    </>
  );
}
