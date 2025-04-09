import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  Modal,
  Fade,
  Backdrop,
  IconButton,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const formatTimelineLabel = (start, end) => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? "Present" : new Date(end);

  const format = (date) => {
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = String(date.getFullYear()).slice(-2);
    return `${month} '${year}`;
  };

  if (end === "Present") return `Since ${format(startDate)}`;
  if (
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth()
  )
    return `${format(startDate)}`;

  return `${format(startDate)} – ${format(endDate)}`;
};

const ProjectCard = ({ project, index, sliderRef }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 10,
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          // Scroll the slider to this card
          if (sliderRef?.current) {
            sliderRef.current.slickGoTo(index);
          }

          handleOpen();
        }}
        style={{ width: "100%", maxWidth: 340 }}
      >
        <Card
          elevation={10}
          sx={{
            width: "100%",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "1.5rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease",
            overflow: "visible",
            cursor: "pointer",
            zIndex: 20,
            position: "relative",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <CardContent sx={{ px: 3, py: 2 }}>
            <Box textAlign="center">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {project.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ opacity: 0.7 }}
                gutterBottom
              >
                {formatTimelineLabel(project.startDate, project.endDate)}
              </Typography>
            </Box>

            {project.image ? (
              <Box display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={project.image}
                  alt={`${project.name} preview`}
                  sx={{
                    width: "100%",
                    maxWidth: 280,
                    height: 180,
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                    my: 2,
                  }}
                />
              </Box>
            ) : (
              <Box display="flex" justifyContent="center">
                <div class="fa-4x">
                  <i
                    class="fa-solid fa-cog fa-spin fa-spin-reverse"
                    style={{
                      "--fa-animation-duration": "6s",
                      width: "100%",
                      maxWidth: 280,
                      height: 180,
                    }}
                  ></i>
                </div>
              </Box>
            )}

            {project.tags?.length > 0 && (
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  gutterBottom
                  sx={{ textAlign: "left", opacity: 0.8 }}
                >
                  Tags:
                </Typography>
                <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                  {project.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{ color: "white", borderColor: "white" }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </CardContent>
        </Card>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 300 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "rgba(24, 24, 24, 0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "1.5rem",
              p: 4,
              outline: "none",
              color: "white",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={handleClose} sx={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }} gutterBottom>
              {formatTimelineLabel(project.startDate, project.endDate)}
            </Typography>
            {project.image ? (
              <Box display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={project.image}
                  alt={`${project.name} preview`}
                  sx={{
                    width: "75%",
                    // maxWidth: 280,
                    // height: 200,
                    // objectFit: "cover",
                    borderRadius: "0.75rem",
                    my: 2,
                  }}
                />
              </Box>
            ) : (
              <Box display="flex" justifyContent="center">
                <div class="fa-4x">
                  <i
                    // style={{ width: "100%" }}
                    width="100px"
                    class="fa-solid fa-cog fa-spin fa-spin-reverse"
                    style={{ "--fa-animation-duration": "6s" }}
                  ></i>
                </div>
              </Box>
            )}

            {project.institution && (
              <Typography variant="body2" sx={{ opacity: 0.8 }} gutterBottom>
                {project.institution}
              </Typography>
            )}

            {project.description && (
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  lineHeight: 1.5,
                  maxHeight: 100,
                  overflow: "auto",
                }}
              >
                {project.description}
              </Typography>
            )}

            {project.skills?.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  gutterBottom
                  sx={{ textAlign: "left", opacity: 0.8 }}
                >
                  Skills:
                </Typography>
                <Stack spacing={0.5} sx={{ pl: 1 }}>
                  {project.skills.map((skill, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{ fontSize: 13, opacity: 0.85 }}
                    >
                      • {skill}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            )}
            {project.demo ? (
              <Box mt={4} textAlign="center">
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </Button>
              </Box>
            ) : (
              <></>
            )}

            {project.tags?.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  gutterBottom
                  sx={{ textAlign: "left", opacity: 0.8 }}
                >
                  Tags:
                </Typography>
                <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                  {project.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{ color: "white", borderColor: "white" }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </motion.div>
  );
};

export default ProjectCard;
