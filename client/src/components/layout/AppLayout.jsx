import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet-async";
import { Grid } from '@mui/material'; // Use the standard Grid component
import ChatList from "../../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../../specific/Profile";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat =(e,_id,groupChat) =>{
      e.preventDefault();
      console.log("Delete Chat",_id,groupChat)
    }
    return (
      <>
        <Helmet>
          <title>Chat App</title>
        </Helmet>

        <Header />

        <Grid container height="calc(100vh - 4rem)">
          {/* Left section */}
          <Grid 
            sx={{
              display: { xs: "none", sm: "block" },
              flexBasis: { sm: '33.33%', md: '25%' },
              height: "100%",
            }}
          >
            <ChatList chats= {sampleChats}  chatId={chatId} handleDeleteChat={handleDeleteChat}
          
            />
          </Grid>

          {/* Middle section */}
          <Grid
            sx={{
              flexBasis: { xs: '100%', sm: '66.66%', md: '41.66%', lg: '50%' },
              height: "100%",
            }}
          >
            <WrappedComponent {...props} />
          </Grid>

          {/* Right section */}
          <Grid
            sx={{
              display: { xs: "none", md: "block" },
              flexBasis: { md: '33.33%', lg: '25%' },
              height: "100%",
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
           <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
