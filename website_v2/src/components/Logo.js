import React from "react";
import { ReactComponent as Svg } from "../assets/logo.svg";
import "../styles/Logo.css";

const Logo = () => (
  <div className="logo-container">
    <Svg className="logo-svg" />
  </div>
);

export default Logo;
