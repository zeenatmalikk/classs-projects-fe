import { Grid, Typography, Button } from "@material-ui/core";

import React from "react";

export const Getstarted = () => {
  return (
    <div style={{ backgroundColor: "#12232E", marginBottom:200 }}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={4}>
          
          <Typography
            variant="h1"
            style={{
              paddingTop: 200,
              fontFamily: "initial",
              
              color: " #EEFBFB",
              
              paddingBottom:30
            }}
          >
            The best place for the best career
          </Typography>
          <Button variant="contained" color="primary" style={{
              fontSize:22,
              backgroundColor:" #EEFBFB",
              color:"#12232E"
          }}>
              GET STARTED
          </Button>
        </Grid>
<Grid md={3} style={{backgroundColor:"#12232E"}}>
        <img
          src="https://lh3.googleusercontent.com/proxy/YitrEkH8aK74l0GhfXQIGiy1di0L7AemespREvt2kqUbgjN3HosN0AVGq5Xl88XfEEzG4QKwbeN77hhykkSIKTDU"
          style={{ width:880,
          height:770}}
        />
        </Grid>
      </Grid>
    </div>
  );
};
