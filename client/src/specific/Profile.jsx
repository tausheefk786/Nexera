import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { Face, AlternateEmail, CalendarMonth } from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing="2rem" direction="column" alignItems="center">
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      <ProfileCard heading="Bio" text="akc akcna kacj " />
      <ProfileCard heading="Username" text="iamsrk" icon={<AlternateEmail />} />
      <ProfileCard heading="Name" text="Shahrukh Khan" icon={<Face />} />
      <ProfileCard heading="Joined" text={moment('2023-11-04T18:30:00.000Z').fromNow()} icon={<CalendarMonth />} />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack direction="row" alignItems="center" spacing="1rem" color="white" textAlign="center">
    {icon && icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color="gray" variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
