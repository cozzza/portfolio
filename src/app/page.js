"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import PhotoCarousel from './carrousel';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'monospace',
      textTransform: 'none',
      
    },
  },
});

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedProject, setSelectedProject] = useState("FirstTimelastTime");
  const [selectedPhotoProject, setSelectedPhotoProject] = useState("ded");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfo(true);
    }, 3000); // Show info after 5 seconds

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []); // Runs only once when component mounts

  const projects = {
    FirstTimelastTime: {
      name: "First Time, Last Time",
      video: ["-TLvPe6mJyk"],
      description: "First Time Last Time - Rum for breakfast (2024)",
      isYoutube: true
    },
    Anecoicos: {
      name: "Hacia el Sur",
      video: ["hqkthNHL4HQ"],
      description: "Hacia el Sur - Anecoicos (2019)",
      isYoutube: true
    }
  };

  const photoProjects = {
    Formless: {
      name: "Formless",
      images: ["/images/formless1.jpg", "/images/formless2.jpg", "/images/formless3.jpg", "/images/formless5.jpg", "/images/formless6.jpg"],
      description: "Serie nocturna realizada en el bosque. Capturadas con una Halmaflex TLR, en 120mm. Vestuario realizado por mi. (2021)"
    },
    megapixel: {
      name: "3.2 megapixeles",
      images: ["/images/3.2 1.jpg", "/images/3.2 2.jpg", "/images/3.2 3.jpg", "/images/3.2 4.jpg", "/images/3.2 5.jpg", "/images/3.2 6.jpg", "/images/3.2 7.jpg", "/images/3.2 8.jpg", "/images/3.2 9.jpg", "/images/3.2 10.jpg", "/images/3.2 11.jpg", "/images/3.2 12.jpg"],
      description: "Serie de fotos realizadas en Florida y New Orleans con una camara Olympus de 3.2megapixeles. (2020)"
    },
    ava: {
      name: "Micaella y Ava",
      images: ["/images/ava1.jpg", "/images/ava2.jpg", "/images/ava3.jpg", "/images/ava4.jpg", "/images/ava5.jpg", "/images/ava6.jpg"],
      description: ""
    },

    ded: {
      name: "ded nature",
      images: ["/images/ded1.jpg", "/images/ded2.jpg", "/images/ded3.jpg","/images/ded4.jpg", "/images/ded5.jpg", "/images/ded6.jpg"],
      description: "Serie realizada en Buenos Aires con una camara de 35mm"
    },
    varias: {
      name: "mixed formats",
      images: ["/images/varias1.jpg", "/images/varias2.png", "/images/varias3.jpg","/images/varias4.jpg", "/images/varias5.jpg", "/images/varias6.JPG"],
      description: ""
    },
    
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      (prev + 1) % photoProjects[selectedPhotoProject].images.length
    );
  };
  
  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      (prev - 1 + photoProjects[selectedPhotoProject].images.length) %
      photoProjects[selectedPhotoProject].images.length
    );
  };


  <style jsx global>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: monspace;
    }
  
    html, body {
      width: 100%;
      overflow-x: hidden;
      background: transparent !important;
      font-family: monspace;
    }
  
    p, h1, h2, h3, h4, h5, a {
      font-family: monspace;
    }
  
    /* Custom scrollbar styles */
    ::-webkit-scrollbar {
      width: 8px;
    }
  
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  
    html {
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
  `}</style>


  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden", // Prevents horizontal scroll
        overflowY: "auto",
        scrollBehavior: "smooth",
      }}
    >
      {/* Fullscreen Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
         <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/flaire.mp4" type="video/mp4" />
        </video> 

        {/* Centered Title */}
        <Typography
          variant="h1"
          fontWeight="bold"
          color="white"
          sx={{ cursor: "pointer", textAlign: "center" }}
          onClick={() => setShowInfo(!showInfo)}
        >
          Cleo
        </Typography>

        {/* Animated Info Box */}
        {showInfo && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            position: "absolute",
            right: 50,
            top: "20%",
            transform: "translateY(-50%)",
            padding: "1rem",
            color: "white",
          }}
        >
          <Typography variant="h6">Artista Visual, fotógrafa, filmmaker, desarrolladora web</Typography>
          <Typography variant="h6">de Buenos Aires, Argentina</Typography>
        </motion.div>
        )}
      </Box>

      {/* Scrollable Videos Section */}
      {/* <Typography variant="h5" color="white" textAlign="left" mb={4} marginLeft={"2rem"} marginTop={"2rem"}>
          Videos
        </Typography> */}
      <Box
        sx={{
          padding: "2rem",
          background: "transparent",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",

        }}
      >
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: "100%",
            overflow: "hidden",
            marginBottom: "2rem",
            marginTop: "2rem",
            alignContent: "center",
            
          }}
        >
          {/* Sidebar */}
          <Box
            className="sidebar"
            sx={{
              width: { xs: "100%", md: "250px" },
              padding: "3%",
              flexShrink: 0,
              minWidth: "280px",
            }}
          >
            {Object.entries(projects).map(([key, project]) => (
              <Typography
                key={key}
                onClick={() => setSelectedProject(key)}
                sx={{
                  cursor: "pointer",
                  marginBottom: "1%",
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                  padding: '0.5rem'
                }}
              >
                {project.name}
              </Typography>
            ))}
          </Box>

          {/* Video Content */}
          <Box
            className="content"
            sx={{
              flex: 1,
              padding: "1%",
              minWidth: 0,
              maxWidth: "100%",
            }}
          >
            <Box className="container" sx={{ flex: 1, padding: "1%", minWidth: 0, maxWidth: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
  {projects[selectedProject].video.map((src, index) => (
    projects[selectedProject].isYoutube ? (
      <iframe
          key={index}
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${projects[selectedProject].video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
    ) : (
      <video
        key={index}
        loop
        muted
        playsInline
        controls
        style={{
          width: "100%",
          maxWidth: "1800px",
          height: "auto",
        }}
        src={src}
      />
    )
  ))}
</Box>
            <Typography className="description" sx={{ textAlign: "center", color: "white" }}>
              {projects[selectedProject].description}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Typography variant="h5" color="white" textAlign="left" mb={4} marginLeft={"2rem"} marginTop={"2rem"}>
          Fotografia
        </Typography> */}
      {/* Scrollable Photos Section */}
      <Box
        sx={{
          padding: "2rem",
          background: "transparent",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
          marginBottom:"4rem"
        }}
      >

        {/* Photo Display Area */}
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: "100%",
            overflow: "hidden",
            marginBottom: "2rem",
            marginTop: "2rem",
            alignContent: "center",
            minHeight: "100%",
          }}
        >

          {/* Sidebar for Photo Projects */}
          <Box
            className="sidebar"
            sx={{
              width: { xs: "100%", md: "250px" },
              padding: "3%",
              flexShrink: 0,
              minWidth: "280px",
            }}
          >
            {Object.entries(photoProjects).map(([key, project]) => (
              <Typography
                key={key}
                onClick={() => setSelectedPhotoProject(key)}
                sx={{
                  cursor: "pointer",
                  marginBottom: "1%",
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                  padding: '0.5rem'
                }}
              >
                {project.name}
              </Typography>
            ))}
          </Box>
          <PhotoCarousel selectedPhotoProject= {selectedPhotoProject} photoProjects={photoProjects} />

        </Box>
      </Box>
      <footer style={{
                  display: "flex", justifyContent:"space-evenly", padding: "1em", marginTop:"2rem", borderTop: "solid 1px white"
                }}>
      <a href="https://instagram.com/___cle00">instagram</a> <a href="https://www.behance.net/JULIETACOZZA">behance</a><a href="https://github.com/cozzza">github</a><a href="mailto:julietacozza@gmail.com">email</a> <a href="https://wa.me/541165123544">contacto</a> 
    </footer>
    </Box>

    </ThemeProvider>
  );
}
