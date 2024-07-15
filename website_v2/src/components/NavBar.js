import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

export default function NavBar(props) {
  const [selectedTab, setSelectedTab] = useState("home");
  const [navbarColor, setNavbarColor] = useState("transparent");
  const theme = props.theme;
  const colors = COLORS.navbar;
  const isFullWidth = !props.isMobile;

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const elementBelowNavbar = document.getElementById("element-below-navbar");

      if (navbar && elementBelowNavbar) {
        const { backgroundColor } = getComputedStyle(elementBelowNavbar);
        setNavbarColor(backgroundColor);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getFontColor = (tab) => {
    if (selectedTab === tab) {
      return theme === "light" ? colors.lightSelectedFont : colors.darkSelectedFont;
    } else {
      return theme === "light" ? colors.lightFont : colors.darkFont;
    }
  };


  if (isFullWidth) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: 0,
        }}
      >
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color: getFontColor("home"),         
            }}
            to="#home"
            onClick={() => {
              setSelectedTab("home");
            }}
          >
            HOME
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "portfolio"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.darkSelectedFont
                  : theme === "light"
                  ? colors.lightFont
                  : colors.darkFont,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("portfolio");
            }}
          >
            PORTFOLIO
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "contact"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.darkSelectedFont
                  : theme === "light"
                  ? colors.lightFont
                  : colors.darkFont,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("contact");
            }}
          >
            CONTACT
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "skills"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.darkSelectedFont
                  : theme === "light"
                  ? colors.lightFont
                  : colors.darkFont,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("skills");
            }}
          >
            SKILLS
          </Link>
        </Box>
      </Box>
    );
  } else {
    return (
      <>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "home"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="#home"
            onClick={() => {
              setSelectedTab("home");
            }}
          >
            HOME
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "portfolio"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("portfolio");
            }}
          >
            PORTFOLIO
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "contact"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("contact");
            }}
          >
            CONTACT
          </Link>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Link
            style={{
              textDecoration: "none",
              color:
                selectedTab === "skills"
                  ? theme === "light"
                    ? colors.lightSelectedFont
                    : colors.lightSelectedFont
                  : theme === "light"
                  ? COLORS.home.lightFont
                  : COLORS.home.darkBg,
            }}
            to="/"
            onClick={() => {
              setSelectedTab("skills");
            }}
          >
            SKILLS
          </Link>
        </Box>
      </>
    );
  }
}
