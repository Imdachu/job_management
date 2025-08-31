import React from "react";

export function FilterSalaryRange() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "128px", // Figma: top 128px
        left: "1098px", // Figma: left 1098px
        height: "22px", // Figma: height 22px
        background: "#FFFFFF",
        boxSizing: "border-box",
        fontFamily: "Satoshi Variable, sans-serif",
        fontWeight: 600,
        fontStyle: "Bold",
        fontSize: "16px",
        lineHeight: "22px",
        color: "#222222",
      }}
    >
      <span
        style={{ width: "126px", display: "inline-block", textAlign: "left" }}
      >
        Salary Per Month
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "16px",
        }}
      >
        {/* Decorative slider bar and handles (static UI) */}
        <div
          style={{
            width: "168.5px",
            height: "5px",
            background: "#E0E0E0",
            borderRadius: "2.5px",
            position: "relative",
            marginRight: "8px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "-5px",
              width: "5px",
              height: "5px",
              background: "#222222",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "0px",
              top: "-5px",
              width: "5px",
              height: "5px",
              background: "#222222",
              borderRadius: "50%",
            }}
          />
        </div>
        <span
          style={{
            width: "93px",
            marginLeft: "8px",
            fontWeight: 600,
            fontSize: "16px",
            color: "#222222",
          }}
        >
          ₹50k - ₹80k
        </span>
      </div>
    </div>
  );
}
