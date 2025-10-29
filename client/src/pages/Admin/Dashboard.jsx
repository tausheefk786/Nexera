import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  Container,
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import {
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import moment from "moment";
import { DoughnutChart, LineChart } from "../../specific/Charts";

const Dashboard = () => {
  // ✅ Appbar Section
  const Appbar = (
    <Paper
      elevation={2}
      sx={{
        padding: "1.5rem 2rem",
        margin: "1.5rem 0",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <AdminPanelSettingsIcon sx={{ fontSize: "2.8rem" }} />

      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            backgroundColor: "#f7f7f7",
            "& fieldset": { border: "none" },
          },
        }}
      />

      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "30px",
          textTransform: "none",
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        Search
      </Button>

      <Typography
        display={{ xs: "none", lg: "block" }}
        color={"rgba(0,0,0,0.7)"}
        textAlign={"center"}
        sx={{ ml: "auto" }}
      >
        {moment().format("dddd, MMMM Do")}
      </Typography>

      <NotificationsIcon />
    </Paper>
  );

  // ✅ Widgets Section
  const WidgetsSection = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing="2rem"
      justifyContent="space-evenly"
      alignItems={"center"}
      marginTop={"2rem"}
      flexWrap="wrap"
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={3} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={453} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"} sx={{ paddingBottom: "3rem" }}>
        {Appbar}

        {/* ✅ Charts Section */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={"2rem"}
          justifyContent="space-between"
          alignItems="stretch"
          flexWrap="wrap"
          sx={{ marginTop: "2rem" }}
        >
          {/* Line Chart */}
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 2.5rem",
              borderRadius: "1rem",
              flex: 2,
              minWidth: "300px",
              height: "25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              marginBottom={"1rem"}
              color="rgba(0,0,0,0.8)"
            >
              Last Messages
            </Typography>
            <Box sx={{ flex: 1 }}>
              <LineChart />
            </Box>
          </Paper>

          {/* Doughnut Chart */}
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flex: 1,
              minWidth: "250px",
              height: "25rem",
            }}
          >
            <DoughnutChart
              labels={["Single Chats", "Group Chats"]}
              value={[23, 66]}
            />
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

// ✅ Widget Component
const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={2}
    sx={{
      padding: "1.5rem 2rem",
      borderRadius: "1rem",
      width: "100%",
      maxWidth: "18rem",
      textAlign: "center",
      backgroundColor: "#fff",
    }}
  >
    <Stack alignItems={"center"} spacing={"0.8rem"}>
      <Box
        sx={{
          border: "4px solid rgba(0,0,0,0.8)",
          borderRadius: "50%",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        {value}
      </Box>

      <Stack direction="row" alignItems="center" spacing="0.4rem">
        {Icon}
        <Typography variant="body1" color="rgba(0,0,0,0.7)">
          {title}
        </Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
