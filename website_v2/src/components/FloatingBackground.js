import React, { useEffect, useRef } from "react";
import cloudImg from "../assets/cloud.png";
import starImg from "../assets/star.svg";
import "../styles/floatingBackground.css";

const MAX_CLOUDS = 20;
const MAX_STARS = 100;

const FloatingBackground = () => {
  const containerRef = useRef(null);
  const cloudRefs = useRef([]);
  const cloudCount = useRef(0);
  const starCount = useRef(0);
  const recentCloudTopsLeft = useRef([]);
  const recentCloudTopsRight = useRef([]);
  const MIN_CLOUD_SPACING = 20; // in percent (adjust as needed)

  useEffect(() => {
    const container = containerRef.current;

    // 🌟 Star logic
    const createStar = () => {
      if (starCount.current >= MAX_STARS) return;

      const star = document.createElement("img");
      star.src = starImg;
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.transform = `scale(${Math.random() * 0.8 + 0.6})`;

      const container = containerRef.current;
      container.appendChild(star);
      starCount.current++;

      // Cleanup after animation ends
      star.addEventListener("animationend", () => {
        star.remove();
        starCount.current--;
      });
    };

    // ☁️ Cloud logic
    const createCloud = () => {
      if (cloudCount.current >= MAX_CLOUDS) return;

      const direction = Math.random() < 0.5 ? "left-to-right" : "right-to-left";
      const topValue = Math.random() * 70; // %

      // Choose which list to check
      const cloudTopsRef =
        direction === "left-to-right"
          ? recentCloudTopsLeft
          : recentCloudTopsRight;

      const tooClose = cloudTopsRef.current.some(
        (t) => Math.abs(t - topValue) < MIN_CLOUD_SPACING
      );

      if (tooClose) return;

      // Record topValue for this direction
      cloudTopsRef.current.push(topValue);

      const cloud = document.createElement("img");
      cloud.src = cloudImg;
      cloud.classList.add("cloud", direction);

      cloud.style.top = `${topValue}%`;
      cloud.style.opacity = `${Math.random() * 0.4 + 0.6}`;
      cloud.style.transform = `scale(${Math.random() * 0.4 + 0.8})`;
      cloud.style.animationDuration = `${30 + Math.random() * 40}s`;

      containerRef.current.appendChild(cloud);
      cloudRefs.current.push(cloud);
      cloudCount.current++;

      setTimeout(() => {
        cloud.remove();
        cloudCount.current--;

        // Remove topValue from correct direction list
        if (direction === "left-to-right") {
          recentCloudTopsLeft.current = recentCloudTopsLeft.current.filter(
            (t) => t !== topValue
          );
        } else {
          recentCloudTopsRight.current = recentCloudTopsRight.current.filter(
            (t) => t !== topValue
          );
        }

        cloudRefs.current = cloudRefs.current.filter((c) => c !== cloud);
      }, 80000);
    };

    // Immediate cloud burst
    for (let i = 0; i < 3; i++) createCloud();

    // Immediate star burst (optional)
    for (let i = 0; i < 2; i++) createStar();

    // Periodic generation
    const cloudInterval = setInterval(() => {
      if (Math.random() < 0.7) createCloud(); // 70% chance every 8s
    }, 2000);

    const starInterval = setInterval(() => {
      if (Math.random() < 0.5) createStar(); // 50% chance
    }, 1000); // Every 8 second

    return () => {
      clearInterval(cloudInterval);
      clearInterval(starInterval);
    };
  }, []);

  return <div id="floating-bg" ref={containerRef}></div>;
};

export default FloatingBackground;
