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
          d={`M0,0 
           L${maximumX},0   
           C${maximumX / 2},200 ${maximumX / 2},0  0,200z`}
          fill={colors.greenBg}
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
