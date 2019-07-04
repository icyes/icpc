import React from "react";
import style from "./index.module.scss";
import { OSSURL } from "../../service/config.js";
import site from "@/assets/imgs/site.png";
import email from "@/assets/imgs/email.png";
import phone from "@/assets/imgs/phone.png";
import footTitle from "@/assets/imgs/footTitle.png";
export default class Header extends React.Component {
  render() {
    return (
      <div
        className={`${style.footer} flex center `}
        style={{
          background: `url(${OSSURL}footImg.png) no-repeat center center`
        }}
      >
        <div className="flex column">
          <div className={style.top}>
            <img src={OSSURL + "footTitle.png"} alt="" />
            {/* ICPC 2020 Organizing Committee  */}
          </div>
          <div className={`${style.tip}`} style={{ textAlign: "left" }}>
            <div>
              <img src={site} />
              Site：Ningbo University, Ningbo, Zhejiang, China{" "}
            </div>
            <div>
              <img src={email} />
              Conference Tel：0574-87609771
            </div>
            <div>
              <img src={phone} />
              <a style={{ color: "#fff" }} href="mailto:info@icpc23.org">
                Email：info@icpc23.org
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
