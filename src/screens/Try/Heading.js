import { Button, Grid, Typography, makeStyles, Link } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  hover: {
    "&:hover": {
      backgroundColor: " #12232E",
      color: "#EEFBFB",
    },
  },
}));

export const Heading = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "whitesmoke", marginBottom: 70 }}>
      <Grid container style={{ backgroundColor: "whitesmoke" }}>
        <Grid item md={1} />
        <Grid item md={2} style={{ display: "flex" }}>
          <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-e4dc2b4a4e2511dbf524519e9face759.png"
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Typography variant="h4" style={{ padding: 20, color: "#fd661f" }}>
            E✽Learn
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Button>
            <Typography
              variant="body1"
              style={{ color: "#3f6745", padding: 20 }}
            >
              Home
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body1"
              style={{ color: "#3f6745", padding: 20 }}
            >
              Courses
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body1"
              style={{ color: "#3f6745", padding: 20 }}
            >
              Apply
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body1"
              style={{ color: "#3f6745", padding: 20 }}
            >
              About Us
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body1"
              style={{ color: "#3f6745", padding: 20 }}
            >
              Contact
            </Typography>
          </Button>
        </Grid>
        <Grid item md={3} style={{ display: "flex" }}>
          <Button
            variant="outlined"
            className={classes.hover}
            style={{ height: 40, margin: 20 }}
          >
            My Account
          </Button>

          <Link to="">
            <Button
              variant="outlined"
              className={classes.hover}
              style={{ height: 40, margin: 20 }}
            >
              Create Account
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
