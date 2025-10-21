import { Stack, Typography, Box } from "@mui/material";
import { Link } from "../styles/Styledcomponents";
import React from "react";
import { memo } from "react";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{
        padding: "0",
      }}
      to={`/Chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "#000" : "transparent",
          color: sameSender ? "#fff" : "unset",
          position: "relative",
          transition: "all 0.3s ease",
        }}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name} </Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} new messages</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
