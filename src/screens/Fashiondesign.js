import { Grid , Typography, Button} from "@material-ui/core";
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "#FDF8F5",
    },
    inputInput: {
    //  padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },

}));

const Fashiondesign = () => {
    const classes = useStyles();

  return (
    <div>
      <Grid container style={{backgroundColor:"#DDAF94",}}>
        <Grid item md={1} />
        <Grid item md={3}>
        <h2 style={{marginBottom:2, color:"#FDF8F5"}}> D'Florencis</h2>
       <Typography variant="body1">
           Hype Hype
       </Typography>
        </Grid>
        <Grid item md={4}>
        <Button>
            <Typography variant="inherit" style={{
                margin:28,
                color:"#FDF8F5",
                fontWeight:"bold"
            }}>
                All
            </Typography>
        </Button>
        <Button>
            <Typography variant="inherit" style={{
                margin:25,
                color:"#FDF8F5",
                fontWeight:"bold"
            }}>
               MEN
            </Typography>
        </Button>
        <Button>
            <Typography variant="inherit" style={{
                margin:25,
                color:"#FDF8F5",
                fontWeight:"bold"
            }}>
            WOMEN
            </Typography>
        </Button>
        </Grid>
        <Grid item md={3} style={{padding:30, display:"flex"}}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <LocalMallIcon style={{color:"#FDF8F5", margin:10}}/>
        </Grid>

        <Grid item md={1} />
      </Grid>
    </div>
  );
};

export default Fashiondesign;
