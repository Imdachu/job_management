import React from "react";

export function FilterPreferredLocation() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "155px", // Figma: top 155px
        left: "453px", // Figma: left 453px
        width: "174px", // 16px (icon) + 8px (gap) + 134px (text) + 8px (gap) + 24px (arrow) = 174px
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
          width: "16px",
          height: "21px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "8px",
        }}
      >
        {/* Decorative location icon SVG */}
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 20C8 20 1 12.5 1 7.5C1 3.91 4.13 1 8 1C11.87 1 15 3.91 15 7.5C15 12.5 8 20 8 20Z"
            stroke="#686868"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="#686868" />
        </svg>
      </span>
      <span
        style={{ width: "134px", display: "inline-block", textAlign: "left" }}
      >
        Preferred Location
      </span>
      <span
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "8px",
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
