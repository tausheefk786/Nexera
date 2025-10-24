import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Container, Box, Paper, Stack, Typography } from "@mui/material";
import {
  SearchField,
  CurveButton,
} from "../../components/styles/Styledcomponents";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import moment from "moment";
import Grid from "@mui/material/Grid";
import { DoughnutChart, LineChart } from "../../specific/Charts";
import { black } from "../../constants/color";


const Dashboard = () => {
  // Appbar Section
  const Appbar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />

        <SearchField placeholder="Search..." />
        <CurveButton>Search</CurveButton>

        <Box flexGrow={1} />

        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("MMMM Do YYYY")}
        </Typography>

        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  // Widgets Section
  const WidgetsSection = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing="2rem"
      justifyContent="space-between"
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={3} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={453} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography variant="h4" margin={"2rem 0"}>
              Last Messages
            </Typography>
            <LineChart/>
          </Paper>
      
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: { xs: "100%", sm: "50%" },
              maxWidth: "25rem",
              height: "25rem",
            }}
          >
            <DoughnutChart/>
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon /> <Typography>Vs</Typography> <PersonIcon />
            </Stack>
          </Paper>
        </Stack>

        {WidgetsSection}
      </Container>
    </AdminLayout>
  );
};

// Widget component
const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "1.5rem 3rem",
      borderRadius: "1rem",
      width: "100%",
      maxWidth: "20rem",
      textAlign: "center",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: `5px solid ${black}`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>

      <Stack direction="row" alignItems="center" spacing="0.5rem">
        {Icon}
        <Typography variant="body1">{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
