import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Team = function () {
  return (
    <section id="team" style={{ scrollMarginTop: "3rem" }}>
      <Box style={{ paddingBottom: "2rem" }}>
        <Typography variant="h4" style={{ marginBottom: "2rem" }}>Our Team</Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} align="center">
            <img style={{ height: "15rem", marginBottom: "1rem", padding: "3rem 0 3rem 0" }} src={require("../assets/kyra-pic.png")} />
            <Typography align="center" variant="h5">polumathes</Typography>
            <Typography align="center" variant="h6">Developer</Typography>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <img style={{ height: "15rem", marginBottom: "1rem", padding: "3rem 0 3rem 0" }} src={require("../assets/alej-pic.png")} />
            <Typography align="center" variant="h5">blvckjupiter</Typography>
            <Typography align="center" variant="h6">Photographer</Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Team;