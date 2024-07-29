import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

export default function NavBar(props) {
  const [selectedTab, setSelectedTab] = useState("home");
  const theme = props.theme;
  const colors = COLORS.navbar;
  const isFullWidth = !props.isMobile;

  const getFontColor = (tab) => {
    if (selectedTab === tab) {
      return theme === "light"
        ? colors.lightSelectedFont
        : colors.darkSelectedFont;
    } else {
      return theme === "light" ? colors.lightFont : colors.darkFont;
    }
  };

  const handleClick = (tab, event) => {
    event.preventDefault(); // Prevent default link behavior
    setSelectedTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
  };

  const tabs = [
    { name: "home", label: "HOME" },
    { name: "accomplishments", label: "ACCOMPLISHMENTS" },
    { name: "hobbies", label: "HOBBIES" },
  ];

  // TO DO:It would be cool if the color of the tabs were according to the base elements color underneath  it
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isFullWidth ? "row" : "column",
        position: isFullWidth ? "absolute" : "relative",
        right: isFullWidth ? 0 : "auto",
        marginRight: isFullWidth ? "40px" : "auto",
      }}
    >
      {tabs.map((tab) => (
        <Box key={tab.name} sx={{ paddingX: 2 }}>
          <Link
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color: getFontColor(tab.name),
            }}
            to="/"
            onClick={() => handleClick(tab.name)}
          >
            {tab.label}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
