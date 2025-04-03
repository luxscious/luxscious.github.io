import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { COLORS } from "../constants.js";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import NavBar from "../components/NavBar";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { elastic as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import Logo from "../components/Logo.js";
import timelineInfo from "../assets/timeline.json";
import { ReactComponent as Circle } from "../assets/circle.svg";
import { ReactComponent as Line } from "../assets/line.svg";
import pfp from "../assets/pfp.jpeg";
import Typewriter from "../components/Typewriter.js";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Devpost } from "../assets/devpost.svg";
import { ReactComponent as LogoSmall } from "../assets/logo.svg";
import AnimatedIcon from "../components/AnimatedIcon.js";
import aboutMeInfo from "../assets/aboutMe.json";
import TimelineRow from "../components/TimelineRow.js";
import FloatingBackground from "../components/FloatingBackground.js";

export default function Home(props) {
  const [maximumX, setMaximumX] = useState(window.innerWidth);
  const theme = props.theme;
  const colors = COLORS.home;
  const timelineColors = COLORS.timeline;
  const footerColors = COLORS.footer;
  const [navPanel, setNavPanel] = useState(false);

  const getSortableDate = (item) => {
    // If 'Present', use a future date to make it appear most recent
    return item.endDate === "Present" ? new Date() : new Date(item.endDate);
  };

  const experiences = timelineInfo
    .filter((item) => item.tags.includes("Work"))
    .sort((a, b) => getSortableDate(b) - getSortableDate(a));

  const projects = timelineInfo
    .filter((item) => item.tags.includes("Project"))
    .sort((a, b) => getSortableDate(b) - getSortableDate(a));

  const degrees = timelineInfo
    .filter((item) => item.tags.includes("Education"))
    .sort((a, b) => getSortableDate(b) - getSortableDate(a));

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });
    window.addEventListener("resize", () => {
      setMaximumX(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setMaximumX(window.innerWidth);
      });
    };
  }, []);

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "50px",
      height: "50px",
      top: "36px",
      right: "50px",
    },
    bmBurgerBars: {
      background: theme === "light" ? colors.lightFont : colors.darkFont,
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },

    bmMenu: {
      background: theme === "light" ? colors.darkBg : colors.lightBg,
      padding: "3em 1.5em 3em",
      fontSize: "16px",
      justifyContent: "center",
      display: "flex",
    },
    bmMorphShape: {
      fill: theme === "light" ? colors.darkBg : colors.lightBg,
    },
    bmItemList: {
      display: "flex",
      flexDirection: "column",
      background: theme === "light" ? colors.darkBg : colors.lightBg,
      justifyContent: "space-between",
    },
  };
  return (
    <>
      <div
        class={`home-container home-container--${
          theme === "dark" ? "light" : "dark"
        }`}
      >
        {/* Top nav bar / mobile navbar  */}
        {/* <div
          class="top-bar-desktop"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: "5%",
            paddingTop: "10px",
            alignItems: "center",
          }}
        >
          <NavBar theme={theme} />
        </div> */}

        {/* NAME  */}
        <div
          style={{
            height: "95%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: 200,
                height: 200,
                margin: 0,
              }}
            >
              <Logo />
            </div>
            {/* name */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h1
                style={{
                  color: colors.lightFont,
                  fontSize: "32px",
                  letterSpacing: "20px",
                  textAlign: "middle",
                  maxHeight: "100%",
                  padding: "20px",
                }}
              >
                GABRIELLA{" "}
              </h1>
              <h1
                style={{
                  color: colors.lightFont,
                  fontSize: "32px",
                  letterSpacing: "20px",
                  textAlign: "middle",
                  padding: "20px",
                }}
              >
                {" "}
                GERGES
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                href={
                  "https://luxscious.github.io/git-cloud-storage/Gabriella_Gerges_Resume.pdf"
                }
              >
                Resumé
              </Button>
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                href="#timeline"
              >
                Work Experience
              </Button>
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                href="#projects"
              >
                Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Squiggle line seperator */}
      <svg width="100%" height="200" class="section">
        <path
          d={`M0,0 
           L${maximumX},0   
           C${maximumX / 2},200 ${maximumX / 2},0  0,200z`}
          fill={colors.darkBg}
        />
      </svg>

      {/*About Me*/}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Playwrite AT",
              paddingLeft: "20%",
              paddingRight: "10%",
            }}
          >
            {/* HI typed */}
            <Typewriter
              text={"Hi..."}
              delay={400}
              infinite={true}
              style={{
                fontSize: 50,
                height: "64px", //its fontsize * 2 pixels?
              }}
            />
            {/* paragraph typed */}
            <p
              style={{
                fontSize: 20,
                fontFamily: "Shantell Sans",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              {aboutMeInfo.text}
            </p>
            {/* connect links */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <AnimatedIcon
                width={30}
                height={30}
                onClick={"https://github.com/luxscious"}
              >
                <Github />
              </AnimatedIcon>
              <AnimatedIcon
                width={30}
                height={30}
                onClick={"https://www.linkedin.com/in/gabriella-gerges/"}
              >
                <LinkedIn />
              </AnimatedIcon>
              <AnimatedIcon
                width={64}
                height={64}
                style={{ marginTop: -2 }}
                onClick={
                  "https://devpost.com/luxscious?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                }
              >
                <Devpost />
              </AnimatedIcon>
            </div>
          </div>

          {/* pic */}
          <div style={{ display: "flex", paddingRight: "5%" }}>
            <img maxWidth={200} maxHeight={200} alt={"Me"} src={pfp} />
          </div>
        </div>
      </div>

      {/* Squiggle Line separator for timeline */}
      <svg
        class="section"
        width="100%"
        height="200"
        viewBox={`0 0 ${maximumX} 200`}
        preserveAspectRatio="none"
        style={{ display: "block", margin: 0, padding: 0 }}
      >
        <path
          d={`M0,200 
         L${maximumX},200   
         C${maximumX / 2},0 ${maximumX / 2},200  0,0z`}
          fill={timelineColors.darkBg}
        />
      </svg>
      <>
        {/* $Timeline */}
        <div
          id="timeline"
          style={{
            width: "100vw",
            // marginTop: 0,
            position: "relative",
            backgroundColor: timelineColors.darkBg,
            paddingBottom: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <FloatingBackground />
          {/* {Work}  */}
          <div style={{ width: "60vw", paddingBottom: 250, zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: 40,
              }}
            >
              <div style={{ width: 50, height: 50 }}>
                <LogoSmall />
              </div>
              <h1
                style={{
                  color: "white",
                  fontSize: 24,
                  letterSpacing: "6px",
                  paddingLeft: 5,
                }}
              >
                Work Experience
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: 100,
              }}
            >
              {/*Map experiences in chronological order*/}
              {experiences.map((experience, index) => (
                <TimelineRow
                  key={experience.id}
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          {/* {Projects}  */}
          <div id="projects" style={{ width: "60vw", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 40,
              }}
            >
              <div style={{ width: 50, height: 50 }}>
                <LogoSmall />
              </div>
              <h1
                style={{
                  color: "white",
                  fontSize: 24,
                  letterSpacing: "6px",
                  paddingLeft: 5,
                }}
              >
                Projects
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
                justifyContent: "flex-start",
                paddingTop: 100,
              }}
            >
              {/*Map experiences in chronological order*/}
              {projects.map((project, index) => (
                <TimelineRow
                  key={project.id}
                  experience={project}
                  isLast={index === projects.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </>
      {/* Squiggle Line separator for Footer */}
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <svg
          width="100%"
          height="200"
          viewBox={`0 0 ${maximumX} 200`}
          preserveAspectRatio="none"
          style={{ display: "block", margin: 0, padding: 0 }}
        >
          <path
            d={`M0,0 
           L${maximumX},0   
           C${maximumX / 2},200 ${maximumX / 2},0  0,200z`}
            fill={timelineColors.darkBg}
          />
        </svg>
        <div
          style={{
            // height: "100px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              fontFamily: "Rock Salt",
              color: "black",
            }}
          >
            made by: Gabriella Gerges, 2025
          </p>
        </div>
      </div>
    </>
  );
}
