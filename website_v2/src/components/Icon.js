import React from "react";

const Icon = ({ children, ...props }) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export default Icon;
