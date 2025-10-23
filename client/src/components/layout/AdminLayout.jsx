import React, { useState } from "react";
import Grid from "@mui/material" // ✅ Correct import
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Message as MessageIcon,
  Group as GroupIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Link as LinkComponent, useLocation } from "react-router-dom";


// Styled Link
const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

// Tabs for Sidebar
export const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/user-management",
    icon: <PersonIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
  {
    name: "Groups",
    path: "/admin/groups",
    icon: <GroupIcon />,
  },
];

// Sidebar Component
const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();

  return (
    <Stack
      width={w}
      direction="column"
      p="3rem"
      spacing="3rem"
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h5" textTransform="uppercase" fontWeight="bold">
        Nexera
      </Typography>

      <Stack spacing="1.2rem">
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            style={{
              textDecoration: "none",
              color: location.pathname === tab.path ? "#1976d2" : "#000",
              fontWeight: location.pathname === tab.path ? "600" : "400",
            }}
          >
            <Stack direction="row" alignItems="center" spacing="1rem">
              {tab.icon}
              <Typography variant="body1">{tab.name}</Typography>
            </Stack>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

// Admin Layout Component
const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => setIsMobile((prev) => !prev);
  const handleClose = () => setIsMobile(false);

  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "repeat(12, 1fr)",
        },
        minHeight: "100vh",
      }}
    >
      {/* Menu button for mobile */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
          zIndex: 10,
        }}
      >
        <IconButton onClick={handleMobile} color="inherit">
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Sidebar for desktop */}
      <Box
        sx={{
          gridColumn: { md: "span 4", lg: "span 3" },
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar />
      </Box>

      {/* Main content */}
      <Box
        sx={{
          gridColumn: { md: "span 8", lg: "span 9" },
          p: 3,
          bgcolor: "#fff",
        }}
      >
        {children}
      </Box>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={isMobile} onClose={handleClose}>
        <Sidebar w="60vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
