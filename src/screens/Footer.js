import { Grid, Typography, TextField, Button, Icon } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { blue, maroon, darkblue } from "@material-ui/core/colors";
import React from "react";

const Footer = () => {
  return (
    <div style={{marginTop:300}}>
      <Grid container style={{ height: 200 }}>
        <Grid item md={6} xs={12}  style={{}}>
          <Typography variant="h4" style={{ paddingBottom: 30 }}>
            STAY UPDATED
          </Typography>
          <form>
            <TextField
              id="outlined-basic"
              label="Enter your mail...."
              variant="outlined"
              gutterBottom
              style={{
                width: 350,
              }}
            />
            <Button variant="outlined" style={{ height: 56 }}>
              SUBMIT
            </Button>
          </form>
        </Grid>

        <Grid itemm md={6}>
          <Typography variant="h4" style={{ paddingBottom: 30 }}>
            LET'S GET SOCIAL
          </Typography>
          <FacebookIcon gutterBottom style={{ fontSize: 50, color: "blue" }} />
          <TwitterIcon
            style={{ fontSize: 50, color: "blue", paddingLeft: 20 }}
          />
          <InstagramIcon
            style={{ fontSize: 50, color: "maroon", paddingLeft: 20 }}
          />
          <YouTubeIcon
            style={{ fontSize: 50, color: "darkblue", paddingLeft: 20 }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "lightblue",

          height: 300,
        }}
      >
        <Grid item md={3}>
          <Typography variant="h6">ABOUT US</Typography>
          <Typography variant="body1" style={{ marginTop: 25 }}>
            Online Learning
          </Typography>
          <Typography variant="body1" gutterBottom>
            About us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Careers
          </Typography>
          <Typography variant="body1" gutterBottom>
            Press Center
          </Typography>
          <Typography variant="body1" gutterBottom>
            Become an Instructor
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">CAMPUS</Typography>
          <Typography style={{ marginTop: 25 }} variant="body1" gutterBottom>
            Our Plans
          </Typography>
          <Typography variant="body1" gutterBottom>
            Free Trial
          </Typography>
          <Typography variant="body1" gutterBottom>
            Academic Solutions
          </Typography>
          <Typography variant="body1" gutterBottom>
            Business Solutions
          </Typography>
          <Typography variant="body1" gutterBottom>
            Government Solutions
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">STUDY</Typography>
          <Typography style={{ marginTop: 25 }} variant="body1" gutterBottom>
            Admissions Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Getting started
          </Typography>
          <Typography variant="body1" gutterBottom>
            online application
          </Typography>
          <Typography variant="body1" gutterBottom>
            visa information
          </Typography>
          <Typography variant="body1" gutterBottom>
            tution calculator
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">SUPPORT</Typography>
          <Typography style={{ marginTop: 25 }} variant="body1" gutterBottom>
            support
          </Typography>
          <Typography variant="body1" gutterBottom>
            Contacts us
          </Typography>
          <Typography variant="body1" gutterBottom>
            System Requirements
          </Typography>
          <Typography variant="body1" gutterBottom>
            Register Activation key
          </Typography>
          <Typography variant="body1" gutterBottom>
            Site Feedback
          </Typography>
        </Grid>
      </Grid>
      <hr style={{ margin: 25 }}></hr>
    </div>
  );
};

export default Footer;
