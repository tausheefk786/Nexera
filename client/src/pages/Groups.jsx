import React, { useState } from "react";
import { Grid, Box, IconButton, Tooltip } from "@mui/material";
import { orange } from "../constants/color";
import { Menu as MenuIcon, KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateBack = () => navigate("/");
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const IconBtns = (
    <>
      {/* Mobile menu button */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={toggleMobileMenu}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Back button */}
      <Tooltip title="Back">
        <IconButton
          onClick={navigateBack}
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            ":hover": { bgcolor: "black" },
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Grid container height="100vh">
      {/* Sidebar */}
      <Grid
        xs={0}
        sm={4}
        sx={{
          display: { xs: "none", sm: "block" },
          bgcolor: orange,
          height: "100%",
        }}
      >
        Groups List
      </Grid>

      {/* Main content */}
      <Grid
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>
    </Grid>
  );
};

export default Groups;
