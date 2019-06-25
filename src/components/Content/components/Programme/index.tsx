import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";
import TableList from "../../../TableList";
const List1 = [
  [{ text: "Day 1 (May 31)", width: 20 }, { text: "Registration" }],
  [{ text: "Day 2, 3, 4", width: 20 }, { text: "concurrent sessions" }],
  [{ text: "Day 5", width: 20 }, { text: "closing ceremony, excursion" }]
];
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
        {/* <div className={style.Programme}>
          <TipTitle name="Programme" />
        </div>
        <div className={style.Tentative}>Tentative arrangement:</div>
        <div className={style.may}>May 31, 2020 – June 4, 2020</div>
        <div className={style.Scientific}>
          <TableList
            list={List1}
            headColor="#40444F"
            title={[
              { text: "Time", width: 20 },
              { text: "Activity", width: 20 }
            ]}
          />
        </div>
        <div className={style.tips}>
          <span>*</span>Program subject to change until it is finalized by late
          November 2019.
        </div> */}
      </div>
    );
  }
}
