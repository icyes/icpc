import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";
import TableList from "../../../TableList";
const List1 = [
  [{ text: "Regular participants", width: 20 }, { text: "400 USD" }],
  [{ text: "Students/Post docs", width: 20 }, { text: "200 USD" }],
  [{ text: "Accompany persons", width: 20 }, { text: "200 USD" }],
  [{ text: "Industry", width: 20 }, { text: "400 USD" }]
];
const List2 = [
  [{ text: "Regular participants", width: 20 }, { text: "500 USD" }],
  [{ text: "Students/Post docs", width: 20 }, { text: "250 USD" }],
  [{ text: "Accompany persons", width: 20 }, { text: "200 USD" }],
  [{ text: "Industry", width: 20 }, { text: "500 USD" }]
];
const List3 = [
  [{ text: "Regular participants", width: 20 }, { text: "550 USD" }],
  [{ text: "Students/Post docs", width: 20 }, { text: "300 USD" }],
  [{ text: "Accompany persons", width: 20 }, { text: "250 USD" }],
  [{ text: "Industry", width: 20 }, { text: "550 USD" }]
];
interface someProps {
  content: any;
}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<someProps>) {
    super(props);
  }
  render() {
    let { content } = this.props;
    return (
      <div>
        <div
          className="richText"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        {/* <div className={style.Programme}>
          <TipTitle name="Registration and Abstract Submission" />
        </div>
        <div className={style.Deadline} style={{ margin: "26px 0 21px 0 " }}>
          Abstract Submission Deadline: <span>February 28, 2020</span>
        </div>
        <div className={style.Deadline} style={{ marginBottom: "17px" }}>
          Registration Deadline: <span>March 31, 2020 </span>
        </div>
        <div className={style.Fees}>
          Registration Fees (include admission, conference materials, meals and
          coffee breaks)
          <br /> Participants are expected to book and pay their own
          accommodation and travel expenses.
        </div>
        <div className={style.Scientific}>
          <TableList
            list={List1}
            headColor="#40444F"
            title={[{ text: "Early bird (before March 31, 2020)", width: 100 }]}
          />
        </div>
        <div className={style.Scientific}>
          <TableList
            list={List2}
            headColor="#6A942E"
            title={[{ text: "After March 31, 2020", width: 100 }]}
          />
        </div>
        <div className={style.Scientific}>
          <TableList
            list={List3}
            headColor="#40444F"
            title={[{ text: "On site (May 31, 2020)", width: 100 }]}
          />
        </div> */}
      </div>
    );
  }
}
