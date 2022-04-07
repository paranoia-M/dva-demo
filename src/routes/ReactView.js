import style from "./reactView.css";
import React from "react";
import { Button } from "antd";
import { PhotoProvider, PhotoConsumer, PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/index.css";
import p1 from "../assets/photo/wallhaven-0jw3pm.png";
import p2 from "../assets/photo/wallhaven-0pqv9e.png";
import p3 from "../assets/photo/wallhaven-0q675r.png";
import p4 from "../assets/photo/wallhaven-0qpx1d.jpg";

function ReactView() {
  const [visible, setVisible] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  return (
    <div className={style.box}>
      <PhotoProvider>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <img
              src={item}
              alt=""
              style={{
                width: "100%",
                display: "block",
                backgroundColor: "red",
              }}
            />
          </PhotoConsumer>
        ))}
      </PhotoProvider>
    </div>
  );
}

const photoImages = [p1, p2, p3, p4];
export default ReactView;
