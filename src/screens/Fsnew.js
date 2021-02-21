import React, { useState } from "react";
import { Grid, Typography, Button, CardContent, Card } from "@material-ui/core";
import ItemsCarousel from "react-items-carousel";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const data = [
  {
    img:
      "https://thehatstore.com.au/media/catalog/product/cache/7/image/1000x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_6216.1518762991.jpg",
  },
  {
    img:
      "https://choosmeinstyle.com/wp-content/uploads/2019/01/brown-belt-for-women-8859.jpg",
  },
  {
    img:
      "https://img1.cohimg.net/is/image/Coach/c0059_imblk_a0?fmt=jpeg&wid=800&qlt=75,1&op_sharpen=0&resMode=bicub&op_usm=5,0.2,0,0&iccEmbed=0",
  },
  {
    img:
      "https://target.scene7.com/is/image/Target/GUEST_f71ee398-1d41-4fe9-ab91-fe146b6c5fb2?wid=488&hei=488&fmt=pjpeg",
  },
  {
    img:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg",
  },
];

export const Fsnew = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ marginBottom: 100 }}>
      <Grid container style={{}}>
        <Grid
          item
          md={1}
          style={{
            backgroundColor: "#DDAF94",
          }}
        />
        <Grid
          item
          md={2}
          style={{
            backgroundColor: "#DDAF94",
            color:"#FDF8F5"
          }}
        >
          <Typography
            variant="h3"
            style={{
              
              textAlign: "left",
            }}
          >
            NEW ARRIVAL
          </Typography>
        </Grid>
        <Grid item md={1} style={{ backgroundColor: "#DDAF94" }} />
        <Grid item md={8} style={{ backgroundColor: "#DDAF94" }}>
          {" "}
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{<ArrowBackIcon />}</button>}
            rightChevron={<button>{<ArrowForwardIcon />}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
            disableSwipe={true}
          >
            {data.map((o) => (
              <div>
                <img
                  src={o.img}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    alignContent: "center",
                  }}
                />
              </div>
            ))}
          </ItemsCarousel>
        </Grid>
      </Grid>
    </div>
  );
};
