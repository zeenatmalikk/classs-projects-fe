import { Grid, Typography } from "@material-ui/core";
import React from "react";

export const Featured = () => {
  return (
    <div >
      <Grid container style={{ marginBottom: 200 }}>
        <Grid item md={2} xs={2}>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              textAlignLast: "end",
              fontWeight: "bold",
              color: "#1e3322",
            }}
          >
            10k
          </Typography>
          <Typography variant="h6" style={{ textAlign: "end" }}>
            {" "}
            active students
          </Typography>
          <Typography variant="h6" style={{ textAlign: "end" }}>
            {" "}
            ❤️️❤️️❤️️❤️️❤️️
          </Typography>
        </Grid>

        <Grid item md={2} xs={2}>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              color: "#1e3322",
              fontWeight: "bold",
              textAlignLast: "end",
            }}
          >
            4.7
          </Typography>
          <Typography variant="h6" style={{ textAlignLast: "end" }}>
            {" "}
            students community
          </Typography>
          <Typography variant="h6" style={{ textAlignLast: "end" }}>
            ⭐⭐⭐⭐⭐
          </Typography>
        </Grid>
        <Grid item md={2} />
        <Grid item md={5} xs={10}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontWeight: "bold", color: "#3f6745" }}
          >
            Trusted by 25,000+ happy students are joing with us for achieve
            their goal
          </Typography>
          <Typography style={{ marginBottom: 30 }} gutteerbottom variant="h6">
            Also featured in:
          </Typography>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/slack-226533.png"
            style={{ width: 50, height: 50 }}
          />
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
            style={{ width: 50, height: 50, paddingInline: 50 }}
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            style={{ width: 50, height: 50 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
