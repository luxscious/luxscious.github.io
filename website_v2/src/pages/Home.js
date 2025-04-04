import React, { useEffect, useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { COLORS } from "../constants";
import Logo from "../components/Logo";
import timelineInfo from "../assets/timeline.json";
import pfp from "../assets/pfp.jpeg";
import Typewriter from "../components/Typewriter";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Devpost } from "../assets/devpost.svg";
import { ReactComponent as LogoSmall } from "../assets/logo.svg";
import AnimatedIcon from "../components/AnimatedIcon";
import aboutMeInfo from "../assets/aboutMe.json";
import TimelineRow from "../components/TimelineRow";
import FloatingBackground from "../components/FloatingBackground";
import ProjectCard from "../components/ProjectCard";

export default function Home({ theme }) {
  const [maximumX, setMaximumX] = useState(window.innerWidth);
  const timelineRef = useRef(null);
  const colors = COLORS.home;
  const timelineColors = COLORS.timeline;
  // Add this to the top of Home component
  const sliderRef = useRef(null);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });

    const resizeHandler = () => setMaximumX(window.innerWidth);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const getSortableDate = (item) =>
    item.endDate === "Present" ? new Date() : new Date(item.endDate);

  const experiences = timelineInfo
    .filter((item) => item.tags.includes("Work"))
    .sort((a, b) => getSortableDate(b) - getSortableDate(a));

  const projects = timelineInfo
    .filter((item) => item.tags.includes("Project"))
    .sort((a, b) => getSortableDate(b) - getSortableDate(a));

  const PrevArrow = ({ onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: -60,
        left: "calc(50% - 80px)",
        zIndex: 2,
        cursor: "pointer",
      }}
    >
      <ArrowBackIosNewIcon sx={{ color: "white", fontSize: 28 }} />
    </Box>
  );

  const NextArrow = ({ onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: -60,
        right: "calc(50% - 80px)",
        zIndex: 2,
        cursor: "pointer",
      }}
    >
      <ArrowForwardIosIcon sx={{ color: "white", fontSize: 28 }} />
    </Box>
  );

  // Handle card click to center
  const handleCardClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <>
      {/* Hero */}
      <Box
        className={`home-container home-container--${
          theme === "dark" ? "light" : "dark"
        }`}
      >
        <Box
          sx={{
            height: "95%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: 200, height: 200 }}>
              <Logo />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <h1
                style={{
                  color: colors.lightFont,
                  fontSize: 32,
                  letterSpacing: 20,
                  padding: 20,
                }}
              >
                GABRIELLA
              </h1>
              <h1
                style={{
                  color: colors.lightFont,
                  fontSize: 32,
                  letterSpacing: 20,
                  padding: 20,
                }}
              >
                GERGES
              </h1>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
                href="https://luxscious.github.io/git-cloud-storage/Gabriella_Gerges_Resume.pdf"
              >
                Resumé
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
                href="#timeline"
              >
                Work Experience
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
                href="#projects"
              >
                Projects
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <svg width="100%" height="200">
        <path
          d={`M0,0 L${maximumX},0 C${maximumX / 2},200 ${
            maximumX / 2
          },0  0,200z`}
          fill={colors.darkBg}
        />
      </svg>

      {/* About Me */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          py: 12,
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Playwrite AT",
              px: 10,
            }}
          >
            <Typewriter
              text="Hi..."
              delay={400}
              infinite
              style={{ fontSize: 50, height: 64 }}
            />
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
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <AnimatedIcon
                width={30}
                height={30}
                onClick="https://github.com/luxscious"
              >
                <Github />
              </AnimatedIcon>
              <AnimatedIcon
                width={30}
                height={30}
                onClick="https://www.linkedin.com/in/gabriella-gerges/"
              >
                <LinkedIn />
              </AnimatedIcon>
              <AnimatedIcon
                width={64}
                height={64}
                onClick="https://devpost.com/luxscious?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              >
                <Devpost />
              </AnimatedIcon>
            </Box>
          </Box>
          <Box sx={{ pr: 5 }}>
            <img alt="Me" src={pfp} style={{ maxWidth: 200, maxHeight: 200 }} />
          </Box>
        </Box>
      </Box>

      {/* Timeline Section */}
      <svg
        width="100%"
        height="200"
        viewBox={`0 0 ${maximumX} 200`}
        preserveAspectRatio="none"
      >
        <path
          d={`M0,200 L${maximumX},200 C${maximumX / 2},0 ${
            maximumX / 2
          },200  0,0z`}
          fill={timelineColors.darkBg}
        />
      </svg>

      <Box
        id="timeline"
        ref={timelineRef}
        sx={{
          mt: "-3px",
          width: "100vw",
          position: "relative",
          backgroundColor: timelineColors.darkBg,
          pb: 30,
        }}
      >
        <FloatingBackground />

        {/* Work Section */}
        <Box
          sx={{
            width: "60vw",
            pb: 20,
            zIndex: 1,
            justifySelf: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: 5,
            }}
          >
            <Box sx={{ width: 50, height: 50 }}>
              <LogoSmall />
            </Box>
            <h1
              style={{
                color: "white",
                fontSize: 24,
                letterSpacing: 6,
                paddingLeft: 5,
              }}
            >
              Work Experience
            </h1>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 12 }}>
            {experiences.map((exp, index) => (
              <TimelineRow
                key={exp.id}
                experience={exp}
                isLast={index === experiences.length - 1}
                containerRef={timelineRef}
              />
            ))}
          </Box>
        </Box>

        {/* Projects Carousel */}
        <Box
          id="projects"
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 2,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            overflow: "visible",
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
            }}
          >
            <Slider
              ref={sliderRef}
              centerMode
              centerPadding="60px"
              slidesToShow={3}
              infinite
              arrows
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
              dots
              speed={500}
              autoplay
              adaptiveHeight={false}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 2, centerPadding: "40px" },
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 1, centerPadding: "20px" },
                },
              ]}
            >
              {projects.map((project, index) => (
                <Box
                  key={project.id}
                  sx={{
                    px: 1,
                    display: "flex",
                    justifyContent: "center",
                    pb: 4,
                    pt: 1,
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    sliderRef={sliderRef}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>

      {/* Footer Divider */}
      <Box sx={{ backgroundColor: "white" }}>
        <svg
          width="100%"
          height="200"
          viewBox={`0 0 ${maximumX} 200`}
          preserveAspectRatio="none"
        >
          <path
            d={`M0,0 L${maximumX},0 C${maximumX / 2},200 ${
              maximumX / 2
            },0  0,200z`}
            fill={timelineColors.darkBg}
          />
        </svg>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontFamily: "Rock Salt", color: "black" }}>
            made by: Gabriella Gerges, 2025
          </p>
        </Box>
      </Box>
    </>
  );
}
