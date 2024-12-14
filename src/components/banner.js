import { Carousel } from "antd";
import { Color } from "antd/es/color-picker";
import { useState } from "react";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => {
  const [dotPosition, setDotPosition] = useState("left");

  return (
    <div style={{ height: "332px" }}>
      <Carousel autoplay dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
