import React from "react";
import { TextInput } from "@mantine/core";

export function FilterSearchBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "155px", // Figma: top 155px
        left: "109px", // Figma: left 109px
        width: "179px", // Figma: width 179px
        height: "22px", // Figma: height 22px
        background: "#FFFFFF",
        boxSizing: "border-box",
        paddingLeft: "32px", // space for icon
        fontSize: "16px",
        fontWeight: 500,
        color: "#686868",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "8px",
          top: "2px",
          width: "18px",
          height: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Decorative search icon SVG */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="7" stroke="#686868" strokeWidth="1.5" />
          <line
            x1="13"
            y1="13"
            x2="17"
            y2="17"
            stroke="#686868"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search By Job Title, Role"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderBottom: "1.5px solid #686868", // Only bottom border as per Figma
          outline: "none",
          background: "transparent",
          fontSize: "16px",
          fontWeight: 500,
          color: "#686868",
        }}
      />
    </div>
  );
}
