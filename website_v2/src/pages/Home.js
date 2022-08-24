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
  console.log(navPanel);
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
    <div id="outer-container">
      <div
        id="page-wrap"
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
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "middle",
              maxWidth: "100%",
              flexWrap: "wrap",
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
      {/* Squiggle line seperator */}
      <div class="svg-line">
        <svg width="100%" height="200">
          <path
            d={`M0,0 
           L${maximumX},0   
           C${maximumX / 2},200 ${maximumX / 2},0  0,200z`}
            fill={theme === "light" ? colors.lightBg : colors.darkBg}
          />
        </svg>
        <div
          style={{ width: "100%", height: "50vh", backgroundColor: "white" }}
        ></div>
      </div>
    </div>
  );
}
