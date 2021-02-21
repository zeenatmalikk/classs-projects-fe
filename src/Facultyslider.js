import { Card, CardContent, Grid,Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(() => ({
  textonheding: {
    
    "&:hover": {
      backgroundColor:"complimentarygreen",
      color:"white",
      
    },
  },
}));

const data = [
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "Physics",
    name: "abcd",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team2.png",
    faculty: "Chemistry",
    name: "abcd",
  },
  {
    img:
   " https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team3.png",
    faculty: "Biology",
    name: "abcd",
  },
  {
    img:
    "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team4.png",
    faculty: "English",
    name: "abcd",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "C.S",
    name: "abcd",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "Maths",
    name: "abcd",
  },
];

const Facultyslider = () => {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div style={{ height:650,  padding: `0 ${chevronWidth}px` ,
   }}>
      <h1 style={{
      textAlign:"center",
      fontFamily:"-moz-initial"
         
      }}  >
        Our Best Teachers
      </h1>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{<ArrowBackIcon/>}</button>}
        rightChevron={<button>{<ArrowForwardIcon/>}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
        {data.map((o) => (
          <div >
              <Grid>
                  <Grid item md={1}/>
                  <Grid>
           <Card 
          
           style={{backgroundColor:"whitesmoke",
           margin:3}}>
            <CardContent>
            <img
              src={o.img}
              style={{
                width:317,
                height:320
              }}
            />
            <Typography variant="h4"
            className={classes.textonheding} style={{ textAlign: "center" }}>
              {o.faculty}
            </Typography>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {o.name}
            </Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item md={1}/>
            
            </Grid>
            
          </div>
          
        ))}
        
      </ItemsCarousel>
      <Grid container style={{margin:100}}>
        <Grid item md={5}/>
        <Grid item md={2} style={{margintop:100}}>
        <Button variant="contained" color="primary" style={{}}>
        View all Faculty
      </Button>
     
        </Grid>
        <Grid item md={5}/>
      </Grid>
     
    </div>
  );
};

export default Facultyslider;
