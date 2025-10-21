import React from "react";
import { Grid, Skeleton, Stack, Box } from "@mui/material";

const Loaders = () => {
  return (
    <Grid
      container
      height="calc(100vh - 4rem)"
      sx={{ gap: 2 }} // spacing between columns
    >
      {/* Left sidebar */}
      <Grid
        sx={{
          display: { xs: "none", sm: "block" },
          flexBasis: { sm: "33.33%", md: "25%" },
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Grid>

      {/* Middle content */}
      <Grid
        sx={{
          flexGrow: 1, // middle fills remaining space
          height: "100%",
        }}
      >
        <Box width="100%" height="100%">
          <Stack spacing={2}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height="10rem"
                width="100%" // ensures skeleton matches middle column width
              />
            ))}
          </Stack>
        </Box>
      </Grid>

      {/* Right sidebar */}
      <Grid
        sx={{
          display: { xs: "none", md: "block" },
          flexBasis: { md: "25%", lg: "25%" },
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Grid>
    </Grid>
  );
};

export default Loaders;
