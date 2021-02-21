import React from "react";
import { Grid, makeStyles } from "@material-ui/core";




export const Topics = () => {
  return (
    <div
      style={{
        backgroundColor: "#12232E",
        marginTop: 200,
        height: 400,
      }}
    >
      <Grid container>
        <Grid item md={1} />
        <Grid item md={10}>
          <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-251c205de6105b216e43f280285d959d.png"
            style={{
              height: 100,
              width: 100,

              marginTop: 150,
              marginInline: 100,
              paddingtop: 10,
            }}
          />
          <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-003ea7262e1af37558f37d061e90e4a8.png"
            style={{
              height: 100,
              width: 100,
              marginInline: 100,
              paddingtop: 10,
              color: "blue",
            }}
          />

          <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-5d549bce5810acf2482a10b0dc2346fd.png"
            style={{ height: 100, width: 100, marginInline: 100 }}
          />
          <img
            src="https://www.pngrepo.com/download/190705/reading-student.png"
            style={{ height: 100, width: 100, marginInline: 100 }}
          />
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};
