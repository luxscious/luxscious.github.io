import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

export default function NavBar(props) {
  const [navBarClass, setNavBarClass] = useState("navbar-white");
  const [selectedTab, setSelectedTab] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    if (sections.length === 0) {
      console.error("No sections found with class 'section'.");
    } else {
      console.log("Sections found:", sections);
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100% 0px", // Adjust this value to better control when the navbar changes
      threshold: 0, // Set threshold to 0 to trigger as soon as any part of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);

          setNavBarClass((prevClass) =>
            prevClass === "navbar-white" ? "navbar-black" : "navbar-white"
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (tab, event) => {
    event.preventDefault();
    setSelectedTab(tab);
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs = [
    { name: "home", label: "HOME" },
    { name: "accomplishments", label: "ACCOMPLISHMENTS" },
    { name: "hobbies", label: "HOBBIES" },
  ];

  return (
    <Box
      className={navBarClass}
      sx={{
        display: "flex",
        flexDirection: props.isMobile ? "column" : "row",
        position: props.isMobile ? "relative" : "absolute",
        right: props.isMobile ? "auto" : 0,
        marginRight: props.isMobile ? "auto" : "40px",
        transition: "color 0.1s",
        justifyContent: props.isMobile ? "flex-start" : "flex-end",
        alignItems: props.isMobile ? "flex-start" : "center",
      }}
    >
      {tabs.map((tab) => (
        <Box key={tab.name} sx={{ paddingX: 2 }}>
          <Link
            id={`tab-${tab.name}`}
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textDecoration: "none",
              color: "inherit",
            }}
            to="/"
            onClick={(event) => handleClick(tab.name, event)}
          >
            {tab.label}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
