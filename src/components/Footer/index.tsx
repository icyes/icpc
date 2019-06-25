import React from "react";
import style from "./index.module.scss";
import site from "@/assets/imgs/site.png";
import email from "@/assets/imgs/email.png";
import phone from "@/assets/imgs/phone.png";
import footTitle from "@/assets/imgs/footTitle.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className={`${style.footer} flex center `}>
        <div className="flex column">
          <div className={style.top}>
            <img src={footTitle} alt="" />
            {/* ICPC 2020 Organizing Committee  */}
          </div>
          <div className={`${style.tip}`} style={{ textAlign: "left" }}>
            <div>
              <img src={site} />
              Site：Ningbo University, Ningbo, Zhejiang, China{" "}
            </div>
            <div>
              <img src={email} />
              Conference Tel：0574-22347768
            </div>
            <div>
              <img src={phone} />
              Email：ICPC2020@126.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}
