import { COLORS } from "../constants";
import { useState } from "react";

export default function Projects(props) {
  const colors = COLORS.projects;
  const [maximumX, setMaximumX] = useState(window.innerWidth);
  const theme = props.theme;
  return (
    <>
      <svg width="100%" height="200">
        <path
          d={`M0,200 
          L${maximumX},200   
          C${maximumX / 2},0 ${maximumX / 2},200  0,0z`}
          fill={theme === "light" ? colors.greenBg : colors.darkGreenBg}
        />
      </svg>
      <div
        id="projects"
        style={{
          height: "100vh",
          backgroundColor:
            theme === "light" ? colors.greenBg : colors.darkGreenBg,
          width: "100%",
        }}
      >
        projects
      </div>
    </>
  );
}
