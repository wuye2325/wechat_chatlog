import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeroSection = ({ title, subtitle }) => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 12 },
      textAlign: "center"
    }}
  >
    <Typography
      variant="h2"
      component="h1"
      sx={{
        fontFamily: 'Noto Serif SC, serif',
        fontWeight: 700,
        mb: 2,
        letterSpacing: "-0.02em",
        fontSize: { xs: "2.2rem", md: "3rem" },
        lineHeight: 1.15
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="h5"
      component="p"
      sx={{
        color: "text.secondary",
        fontWeight: 400,
        fontSize: { xs: "1.1rem", md: "1.4rem" },
        maxWidth: 600,
        mx: "auto"
      }}
    >
      {subtitle}
    </Typography>
  </Box>
);

export default HeroSection;