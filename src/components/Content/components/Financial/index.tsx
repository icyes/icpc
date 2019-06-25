import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";

const text = `
We are pleased to offer some financial assistance for students, postdoctoral scholars, and young investigators in their early career in the form of awards listed below. Availability is limited and application of such awards should be submitted during the abstract submission process.
<br/>
<br/>
<strong>Young Investigator Award:</strong><br/>
Qualified applicant: within 5 years of PhD graduation<br/>
10 Awards total, $500 cash each<br/>
<br/>
<strong>Best poster award:</strong> <br/>
10 awards total, $200 cash each.<br/>
<br/>
<strong>Student Travel Award:</strong><br/>
Two types of travel award will be provided for students and postdoctoral scholars. <br/>
•  Free registration (30 awards total)<br/>
•  Free registration + free room (30 awards total): free room option is only applicable for students from developing countries.<br/>
<br/>
`;
interface someProps {
  content: any;
}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<someProps>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <DateHead />
        <div className={style.Sponsors}>
          <TipTitle name="Sponsors" />
        </div>
        <div className={style.finaText}>
          <div
            dangerouslySetInnerHTML={{
              __html: text
            }}
          />
        </div>
      </div>
    );
  }
}
