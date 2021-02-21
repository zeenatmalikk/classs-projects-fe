import { Grid, Typography } from "@material-ui/core";
import { FontDownload } from "@material-ui/icons";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color:"#deede3",
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#deede3',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Body = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:"whitesmoke", marginBottom:150 }}>
      <Grid container style={{backgroundColor:"#356745",
    borderRadius:"0%",
    height:595,
    
    }}>
        <Grid item md={1} />
        <Grid item md={5} x={5}>
            <Typography style={{textalign:"center",
       margin:70,
          paddingtop:30,
          color:"	 #deede3",
          fontSize:52
         
        }}>
                Let's Grow your Education Level Up With E-Learn
            </Typography>
          

            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for Course"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>



        </Grid>
      
        <Grid item md={5} xs={10}>
          <img src="https://cdn3.iconfinder.com/data/icons/e-learning-flat-education-technology/512/Distance_education-512.png"
          style={{
            
            height:580,
            width:590
          }}/>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};

export default Body;
