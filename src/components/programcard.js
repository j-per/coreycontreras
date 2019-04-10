import React from "react"

import "./bootstrap.min.css"
import "./programcard.css"

const ProgramCard = props => (
  <div className="card-wrapper d-flex">
    <div className="card-number" style={{ backgroundColor: props.color }}>
      {props.number}
    </div>
    <div className="card-text-wrapper d-flex flex-column">
      <div className="card-title">Set Goals</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        consectetur massa nunc, ac ornare tellus aliquet rhoncus. Sed pretium,
        risus id consequat mollis, ex enim vestibulum sem, id scelerisque quam
        nunc vitae diam.
      </p>
    </div>
  </div>
)

export default ProgramCard
