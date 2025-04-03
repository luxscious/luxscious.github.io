import React, { useState } from "react";
const TimelineRow = ({ experience, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatTimelineLabel = (start, end) => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? "Present" : new Date(end);

    const format = (date) => {
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = String(date.getFullYear()).slice(-2); // e.g., '25'
      return `${month} '${year}`;
    };

    if (end === "Present") return `Since ${format(startDate)}`;

    const isSameMonthAndYear =
      startDate.getFullYear() === endDate.getFullYear() &&
      startDate.getMonth() === endDate.getMonth();

    if (isSameMonthAndYear) return `${format(startDate)}`;
    return `${format(startDate)} – ${format(endDate)}`;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        color: "white",
        transition: "transform 0.2s ease-in-out",
        transform: isHovered ? "scale(1.015)" : "scale(1)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginTop: 0,
          height: 50,
        }}
      >
        {/* Left: Date */}
        <h1
          style={{
            fontSize: 18,
            fontFamily: "Rock Salt",
            flex: 1,
            textAlign: "right",
            paddingRight: 20,
            letterSpacing: 6,
            margin: 0,
          }}
        >
          {formatTimelineLabel(experience.startDate, experience.endDate)}
        </h1>

        {/* Circle */}
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />

        {/* Right: Title */}
        <h1
          style={{
            fontSize: 24,
            letterSpacing: 6,
            flex: 1,
            paddingLeft: 20,
            margin: 0,
          }}
        >
          {experience.name}
        </h1>
      </div>

      {/* Line below circle */}
      {!isLast && (
        <div
          style={{
            width: 2,
            height: 200,
            backgroundColor: "white",
            marginTop: 0,
          }}
        />
      )}
    </div>
  );
};

export default TimelineRow;
