import React from "react";
import "./index.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";
const text_OverView = `
<p>Dear Colleagues,</p>
<p>
    On behalf of the Organizing Committee, it is my pleasure to invite
  you to attend the 23nd International Conference on Phosphorus
  Chemistry( ICPC23 ) that will be held from May 31 to June 4, 2020 in
    Ningbo, China.Since its inauguration in 1986( Bonn, Germany ), the
  ICPC series has over the past 33 years continued to be the premier
  international meeting devoted uniquely to PHOSPHORUS chemistry in
    all its domains, providing a broad perspective on the latest
  developments from leading laboratories around the world.
  </p>
  <p>
    All areas of modern phosphorus chemistry will be considered,
    including interdisciplinary research being done at the frontiers of
    biology, material sciences and applied/industrial chemistry. The
    conference will be organized around four interrelated themes: 1)
    Recent advances in new reagents and methods in phosphorus
    (asymmetric) syntheses, including theoretical aspects; 2) New
    applications of phosphorus catalysts in syntheses; 3) Latest
    developments concerning phosphorus-based compounds in life & health
    sciences, including methodologies for studying phosphorus-involving
    processes in living organisms; 4) Phosphorus material chemistry and
    applied science. Graduate students, postdoctorals and faculty in the
    early stage of their careers are particularly encouraged to
    participate.
  </p>
  <p>
    By bringing together academic and industry researchers from diverse
    areas of phosphorus chemistry, ICPC23 will offer an exciting
    opportunity for the dissemination and exchange of new ideas, for
    networking with colleagues and for establishing and strengthening
    collaborations. We are looking forward to welcoming you to Ningbo in
    2020!
  </p>
  <p>ICPC2020 Organizing Committee </p>`;

const text_Topics = `
<strong>New Technologies in Phosphorus Chemistry </strong><br/>
1) New reagents and methods in organophosphorus syntheses <br/>
2) Organophosphorus compounds in catalysis/catalysts<br/>
3) Syntheses of Chiral organophosphorus compounds<br/>
4) Theoretical aspects of organophosphorus chemistry<br/>
5) Organophosphorus coordination chemistry<br/>
6) Inorganic phosphorus chemistry<br/>
     ... ...<br/>
<strong>Phosphorus Chemistry and life & health science</strong><br/>
7) Phosphorus chemistry in origin of life<br/>
8) Phosphorus chemistry in chemical biology<br/>
9) Phosphorus chemistry in medicine<br/>
    ... ...<br/>
10) Phosphorus Chemistry and material Science<br/>
11) Industry<br/>
12) Phosphorus chemistry unknown knowns<br/>
13) Phosphorus chemistry in agriculture and food science<br/>
14) Special section<br/>
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
        {/* <div className="Conference">
          <TipTitle name="Conference Overview" />
        </div>

        <div className="Overview">
          <div
            className="richText"
            dangerouslySetInnerHTML={{
              __html: text_OverView
            }}
          />
        </div>
        <div className="Session">
          <TipTitle name="Session Topics" />
        </div>
        <div className="Topics">
          <div
            dangerouslySetInnerHTML={{
              __html: text_Topics
            }}
          />
        </div> */}
      </div>
    );
  }
}
