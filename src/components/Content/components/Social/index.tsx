import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";

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
    return (
      <div>
        <DateHead />
        <div
          className="richText"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        {/* <div className={style.Sponsors}>
          <TipTitle name="Social Program" />
        </div>
        <div>
          <div className={style.title}>Welcome reception:</div>
          <div className={style.content}>
            6:30 pm on May 31, 2020
            <br />
            All attendees are welcome to the reception for free, and detailed
            plan of the reception will be announced once the conference is
            close.
          </div>
        </div>
        <div>
          <div className={style.title}>Conference Excursion:</div>
          <div className={style.content}>To be announced.</div>
        </div> */}
      </div>
    );
  }
}
