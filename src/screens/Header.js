import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  Hover: {
    "&:hover": {
      backgroundColor: " #12232E",
      color: "#EEFBFB",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item md={2} style={{ backgroundColor: "#12232E", padding: 10 }}>
          <TwitterIcon
            style={{ margin: 10, marginLeft: 20, color: "#EEFBFB" }}
          />
          <FacebookIcon
            style={{ margin: 10, marginLeft: 20, color: "#EEFBFB" }}
          />
          <GTranslateIcon
            style={{ margin: 10, marginLeft: 20, color: "#EEFBFB" }}
          />
          <LinkedInIcon
            style={{ margin: 10, marginLeft: 20, color: "#EEFBFB" }}
          />
        </Grid>
        <Grid item md={2}>
          <Typography
            style={{
              margin: 20,
              color: "gray",
            }}
            variant="body1"
            color="textPrimary"
          >
            academicelixir@gmail.com
          </Typography>
        </Grid>

        <Grid item md={1}>
          <Typography
            style={{
              margin: 20,
              color: "gray",
            }}
            variant="body1"
            color="textPrimary"
          >
            0666222555
          </Typography>
        </Grid>
        <Grid item md={4} />

        <Grid item md={2} style={{}}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<LockOpenIcon />}
              className={classes.Hover}
              style={{
                width: 100,
                margin: 16,
              }}
            >
              LOGIN
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<LockOpenIcon />}
            className={classes.Hover}
            style={{
              width: 120,
            }}
          >
            REGISTER
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
