import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PhotoCarousel = ({ selectedPhotoProject, photoProjects }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const images = photoProjects[selectedPhotoProject]?.images || [];

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      className="content"
      sx={{
        flex: 1,
        padding: "1%",
        minWidth: 0,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Carousel Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
          position: "relative",
          overflow: "hidden",
          maxHeight: "1000px"
        }}
      >
        {/* Arrows */}
        <IconButton
          onClick={handlePrevPhoto}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            //backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            zIndex: 2,
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={handleNextPhoto}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            zIndex: 2,
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        {/* Image Slide */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPhotoIndex}
            src={images[currentPhotoIndex]}
            alt="Selected Project"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </AnimatePresence>
      </Box>

      {/* Description */}
      <Typography className="description" sx={{ textAlign: "center", color: "white", marginTop: "1rem" }}>
        {photoProjects[selectedPhotoProject]?.description}
      </Typography>
    </Box>
  );
};

export default PhotoCarousel;