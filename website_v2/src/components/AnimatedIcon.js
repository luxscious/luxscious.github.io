import React from "react";
import "../styles/AnimatedIcon.css";
import Icon from "./Icon";

const AnimatedIcon = (props) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={props.onClick} className="icon-container" target="_blank">
      <Icon width={props.width} height={props.height}>
        {props.children}
      </Icon>
    </a>
  );
};

export default AnimatedIcon;
