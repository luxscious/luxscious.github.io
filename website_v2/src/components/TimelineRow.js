import React, { useState } from "react";

import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Chip,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const TimelineRow = ({ experience, isLast, containerRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const formatTimelineLabel = (start, end) => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? "Present" : new Date(end);

    const format = (date) => {
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = String(date.getFullYear()).slice(-2);
      return `${month} '${year}`;
    };

    if (end === "Present") return `Since ${format(startDate)}`;

    const isSameMonthAndYear =
      startDate.getFullYear() === endDate.getFullYear() &&
      startDate.getMonth() === endDate.getMonth();

    if (isSameMonthAndYear) return `${format(startDate)}`;
    return `${format(startDate)} – ${format(endDate)}`;
  };

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  return (
    <>
      <div
        onClick={handleOpenDrawer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          color: "white",
          transition: "transform 0.2s ease-in-out",
          transform: isHovered ? "scale(1.015)" : "scale(1)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 0,
            height: 50,
          }}
        >
          <h1
            style={{
              fontSize: 18,
              fontFamily: "Rock Salt",
              flex: 1,
              textAlign: "right",
              paddingRight: 20,
              letterSpacing: 6,
              margin: 0,
            }}
          >
            {formatTimelineLabel(experience.startDate, experience.endDate)}
          </h1>

          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />

          <h1
            style={{
              fontSize: 24,
              letterSpacing: 6,
              flex: 1,
              paddingLeft: 20,
              margin: 0,
            }}
          >
            {experience.name}
          </h1>
        </div>

        {!isLast && (
          <div
            style={{
              width: 2,
              height: 200,
              backgroundColor: "white",
              marginTop: 0,
            }}
          />
        )}
      </div>
      <>
        {/* Drawer comes first */}
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleCloseDrawer}
          container={containerRef?.current}
          ModalProps={{
            container: containerRef?.current,
            keepMounted: true,
            style: { position: "fixed" },
          }}
          PaperProps={{
            sx: {
              width: { xs: "100%", sm: 600 },
              maxWidth: "100vw",
              height: "100%",
              px: 4,
              py: 3,
              boxShadow: 6,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "background.paper",
            },
          }}
        >
          <Container disableGutters sx={{ flex: 1, overflowY: "auto", pb: 5 }}>
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={handleCloseDrawer}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box textAlign="center" mt={2}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {experience.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {formatTimelineLabel(experience.startDate, experience.endDate)}
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              {experience.institution && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  textAlign="center"
                >
                  {experience.institution}
                </Typography>
              )}

              {experience.description && (
                <Typography
                  variant="body1"
                  sx={{ mt: 2, textAlign: "center", px: 2 }}
                >
                  {experience.description}
                </Typography>
              )}

              {experience.skills?.length > 0 && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle1" fontWeight={500} gutterBottom>
                    Skills Used
                  </Typography>
                  <Stack spacing={1} sx={{ pl: 2 }}>
                    {experience.skills.map((skill, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        • {skill}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              )}

              {experience.tags?.length > 0 && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle1" fontWeight={500} gutterBottom>
                    Tags
                  </Typography>
                  <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                    {experience.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        variant="outlined"
                        color="default"
                      />
                    ))}
                  </Stack>
                </Box>
              )}
            </Box>
          </Container>
        </Drawer>

        {/* Backdrop comes AFTER and has lower zIndex */}
        {openDrawer && (
          <div
            onClick={handleCloseDrawer}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1000, // must be under Drawer zIndex
            }}
          />
        )}
      </>
    </>
  );
};

export default TimelineRow;
