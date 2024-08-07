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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
export default function Home(props) {
  const [maximumX, setMaximumX] = useState(window.innerWidth);
  const theme = props.theme;
  const colors = COLORS.home;
  const timelineColors = COLORS.timeline;
  const footerColors = COLORS.footer;
  const [navPanel, setNavPanel] = useState(false);
  useEffect(() => {
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
          theme === "light" ? "light" : "dark"
        }`}
      >
        {/* Top nav bar / mobile navbar  */}
        <div
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
          <div>
            <Button
              sx={{
                height: 40,
                borderColor: "black",
                marginLeft: 5,
                color: theme === "light" ? colors.lightFont : colors.darkFont,
                "&:hover": {
                  backgroundColor:
                    theme === "light"
                      ? colors.lightButtonBgHover
                      : colors.darkButtonBgHover,
                },
              }}
              variant={"text"}
            >
              <a
                href="https://luxscious.github.io/git-cloud-storage/Gabriella_Gerges_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "inherit",
                  color: "inherit",
                  fontSize: "14px",
                }}
              >
                Resumé
              </a>
            </Button>
            <MaterialUISwitch onClick={props.toggle} />
          </div>
          <NavBar theme={theme} />
        </div>
        <div class="top-bar-mobile">
          <Menu
            onOpen={() => {
              setNavPanel(true);
            }}
            isOpen={navPanel}
            onClose={() => {
              setNavPanel(false);
            }}
            customBurgerIcon={
              <Hamburger
                toggled={navPanel}
                color={theme === "light" ? colors.lightFont : colors.darkFont}
              />
            }
            noOverlay
            right
            styles={styles}
          >
            <NavBar isMobile theme={theme} />
          </Menu>
        </div>
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
          </div>
        </div>
      </div>
      {/* Squiggle line seperator */}
      <svg width="100%" height="200" class="section">
        <path
          d={`M0,0 
           L${maximumX},0   
           C${maximumX / 2},200 ${maximumX / 2},0  0,200z`}
          fill={theme === "light" ? colors.lightBg : colors.darkBg}
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
          fill={
            theme === "light" ? timelineColors.lightBg : timelineColors.darkBg
          }
        />
      </svg>
      <>
        {/* $Timeline */}
        <div
          style={{
            width: "100%",
            marginTop: 0,
            backgroundColor:
              theme === "light"
                ? timelineColors.lightBg
                : timelineColors.darkBg,
            paddingBottom: 250,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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
              Timeline
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignSelf: "flex-start",
            }}
          >
            {/*Map experiences in chronological order*/}
            {timelineInfo.map((experience, index) => (
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  color: "white",
                }}
              >
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "flex-end",
                    marginTop: "-5px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: 18,
                      fontFamily: "Rock Salt",
                      flex: 1,
                      textAlign: "right", // Align text to the right
                      paddingRight: 20,
                      letterSpacing: "6px",
                    }}
                  >
                    {experience.date}
                  </h1>
                  <Circle style={{ alignSelf: "flex-end" }} />
                  <h1
                    style={{
                      fontSize: 24,
                      letterSpacing: "6px",
                      flex: 1,
                      textAlign: "left", // Align text to the left
                      paddingLeft: 20,
                    }}
                  >
                    {experience.name}
                  </h1>
                </div>
                {index !== timelineInfo.length - 1 ? (
                  <Line style={{ height: "200px" }} />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
      {/* Squiggle Line separator for Footer */}
      <div
        style={{
          backgroundColor:
            theme === "light" ? footerColors.lightBg : footerColors.darkBg,
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
            fill={
              theme === "light" ? timelineColors.lightBg : timelineColors.darkBg
            }
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
              color: "white",
            }}
          >
            made by: Gabriella Gerges, 2024
          </p>
        </div>
      </div>
    </>
  );
}
