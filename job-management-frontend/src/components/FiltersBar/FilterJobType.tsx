import React from "react";

export function FilterJobType() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "92px", // 18px (icon) + 4px (gap) + 42px (label) + 4px (gap) + 24px (arrow)
        height: "22px", // Figma: height 22px
        background: "#FFFFFF",
        boxSizing: "border-box",
        fontFamily: "Satoshi Variable, sans-serif",
        fontWeight: 500,
        fontStyle: "Medium",
        fontSize: "16px",
        lineHeight: "22px",
        color: "#686868",
      }}
    >
      <span
        style={{
          width: "18px",
          height: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "4px",
        }}
      >
        {/* Decorative job type icon SVG */}
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="3"
            width="16"
            height="12"
            rx="2"
            stroke="#686868"
            strokeWidth="1.5"
          />
          <rect
            x="5"
            y="1"
            width="8"
            height="4"
            rx="1"
            stroke="#686868"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <span
        style={{
          width: "42px",
          display: "inline-block",
          textAlign: "left",
          marginRight: "4px",
        }}
      >
        Job type
      </span>
      <span
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "4px",
        }}
      >
        {/* Decorative down arrow SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#686868"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
