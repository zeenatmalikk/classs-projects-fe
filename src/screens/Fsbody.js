import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Fsbody = () => {
  return (
    <div >
      <Grid container style={{paddingtop:500,}}
      >
         
        <Grid
          item
          md={6}
          style={{
            backgroundColor: "#DDAF94",
          }}
        >
          <Typography variant="h1" style={{
              padding:94,
              color:"#FDF8F5",
              wordSpacing:15
          }}>
              Bring The Hype
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          style={{
            backgroundColor: "#DDAF94",
            paddingBottom:120
          }}
        >
        <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-69f842b0db7093f8da8924ec47693615.png"/>
        <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-69f842b0db7093f8da8924ec47693615.png" style={{
            margin:50
        }}/>
        
        </Grid>
       
      </Grid>

      
    </div>
  );
};

export default Fsbody;
