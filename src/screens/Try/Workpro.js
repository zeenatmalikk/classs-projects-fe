import { Grid } from "@material-ui/core";
import React from "react";

export const Workpro = () => {
  return (
    <div>
      <h1 style={{ textAlignLast: "center", color: "#1e3322" , marginBottom:90}}>
        Working process of join and benefits
      </h1>
      <Grid container style={{margintop:60}}>
        <Grid item md={2} />
        <Grid item md={9}>
          <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-e1ef293a85159b4461fb2d0f8f7dd4a7.png"
            style={{
              height: 100,
              width: 100,
            }}
          />
          <img src="https://webstockreview.net/images/dot-clipart-line-2.png" style={{
              width:290
          }}/>
          
           
        
        
        <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-ae30b9cffaca360448e8bccfe74dcc52.png"
            style={{
              height: 100,
              width: 100,
             marginInline:31
            }}
          />
        
        <img src="https://webstockreview.net/images/dot-clipart-line-2.png" style={{
              width:290
          }}/>
        <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-d5ad9a619a4a025b24b4627ab3690e6a-certificate.png"
            style={{
              height: 100,
              width: 100,
          marginInline:31
            }}
          />
        </Grid>
        
      </Grid>
    </div>
  );
};
