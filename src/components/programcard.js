import React from "react"

import "./bootstrap.min.css"

const ProgramCard = props => (
  <div className="card-wrapper d-flex py-5">
    <img
      src={props.circleSVG}
      alt="test"
      style={{ width: "60px", alignSelf: "flex-start" }}
    />
    <div className="card-text-wrapper d-flex flex-column">
      <h3
        className="card-title"
        style={{ paddingTop: "10px", marginLeft: "5px" }}
      >
        {props.title}
      </h3>
      <p style={{ marginLeft: "5px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        consectetur massa nunc, ac ornare tellus aliquet rhoncus. Sed pretium,
        risus id consequat mollis, ex enim vestibulum sem, id scelerisque quam
        nunc vitae diam.
      </p>
    </div>
  </div>
)

export default ProgramCard
