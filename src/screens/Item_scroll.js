import { Card, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

 const data = [
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "abcd",
    name: "cdbf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "abcd",
    name: "cdbf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "abcd",
    name: "cdbf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "abcd",
    name: "cdbf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "abcd",
    name: "cdbf",
  },
  {
    img:
      "https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/team1.png",
    faculty: "abcd",
    name: "zeenqat",
  },
];

const Item_scroll = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
        {data.map((o) => (
          <div style={{ backgroundColor: "red" }}>
            <img
              src={o.img}
              style={{
                marginLeft: 100,
              }}
            />
            <Typography variant="h4" style={{ textAlign: "center" }}>
            {o.faculty}
            </Typography>
            <Typography variant="h6" style={{ textAlign: "center" }}>
             {o.name}
            </Typography>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Item_scroll;
