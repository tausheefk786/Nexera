import React from "react";
import { Stack, Box, Avatar, AvatarGroup } from "@mui/material";
import { transformImage } from "../../lib/features";

const AvatarCard = ({ avatar, max = 4 }) => {
  // 🧠 Ensure avatar is always an array
  const avatars = Array.isArray(avatar) ? avatar : [avatar];

  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"} position="relative">
          {avatars.map((i, index) => (
            <Avatar
              key={index}
              src={transformImage(i)}
              alt={`Avatar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
