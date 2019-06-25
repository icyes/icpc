import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";
import img1 from "@/assets/imgs/img1.png";
import img2 from "@/assets/imgs/img2.png";
import img3 from "@/assets/imgs/img3.png";
import img4 from "@/assets/imgs/img4.png";

import img2_1 from "@/assets/imgs/img2_1.png";
import img2_2 from "@/assets/imgs/img2_2.png";
import img2_3 from "@/assets/imgs/img2_3.png";
import img2_4 from "@/assets/imgs/img2_4.png";

const imgList = [img1, img2, img3, img4];
const imgList2 = [img2_1, img2_2, img2_3, img2_4];
interface someProps {
  content: any;
}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<someProps>) {
    super(props);
    this.state = {};
  }
  render() {
    let { content } = this.props;
    let imgs = [];
    for (let i in imgList) {
      imgs.push(
        <div className={style.picBox}>
          <img className={style.pic} src={imgList[i]} alt="" key={i} />
        </div>
      );
    }

    let imgs2 = [];
    for (let i in imgList2) {
      imgs2.push(
        <div className={style.picBox}>
          <img className={style.pic} src={imgList2[i]} alt="" key={i} />
        </div>
      );
    }
    return (
      <div>
        <DateHead />
        {/* <div className={style.Accommodation}>
          <TipTitle name="Accommodation" />
        </div>
        <div className={style.AccoText}>
          Two partner hotels are listed below and a web page for hotel
          reservation will be posted on late January 2020.
        </div>

        <div className={style.Hotel}>
          <div className={style.title}>1. Ningbo University Hotel</div>
          <div className={style.des}>
            Located close to campus, walking distance to conference venue.
          </div>
          <div className={`${style.imgs} flex wrap `}>{imgs}</div>
        </div>

        <div className={style.Hotel}>
          <div className={style.title}>2. Ningbo Science Hall Hotel</div>
          <div className={style.des}>
            5 minutes drive to conference venue, and conference shuttle bus will
            be provided for attendees in this hotel. And timetable for
            conference shuttle bus will be posted once available.
          </div>
          <div className={`${style.imgs} flex wrap `}>{imgs2}</div>
        </div> */}
      </div>
    );
  }
}
