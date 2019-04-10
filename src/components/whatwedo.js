import React from "react"
import { FaChalkboardTeacher, FaDumbbell } from "react-icons/fa"

import "./bootstrap.min.css"
import "./whatwedo.css"

const WhatWeDo = () => (
  <section className="whatwedo-wrapper">
    {/* <div className="row mt-5">
      <div className="col">
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          What We Do
        </h2>
      </div>
    </div> */}
    <div className="container" style={{ textAlign: "center" }}>
      <div className="row">
        <div className="col-lg-6 training-wrapper my-5">
          <FaDumbbell className="mb-3" style={{ fontSize: "7em" }} />
          <h3>Training</h3>
          <div className="underline my-3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur massa nunc, ac ornare tellus aliquet rhoncus. Sed
            pretium, risus id consequat mollis, ex enim vestibulum sem, id
            scelerisque quam nunc vitae diam. Aliquam erat volutpat. In justo
            dolor, volutpat in metus non, auctor auctor urna. Aliquam
            ullamcorper quam urna, non luctus lectus aliquet id. Nunc ut est nec
            elit laoreet elementum ut eu arcu. Nulla fermentum dolor sed justo
            efficitur, eget tempus augue dictum. Vivamus eget est at dolor
            posuere malesuada id in quam. Phasellus aliquet feugiat placerat.
          </p>
        </div>
        <div className="col-lg-6 coaching-wrapper my-5">
          <FaChalkboardTeacher className="mb-3" style={{ fontSize: "7em" }} />
          <h3>Coaching</h3>
          <div className="underline my-3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur massa nunc, ac ornare tellus aliquet rhoncus. Sed
            pretium, risus id consequat mollis, ex enim vestibulum sem, id
            scelerisque quam nunc vitae diam. Aliquam erat volutpat. In justo
            dolor, volutpat in metus non, auctor auctor urna. Aliquam
            ullamcorper quam urna, non luctus lectus aliquet id. Nunc ut est nec
            elit laoreet elementum ut eu arcu. Nulla fermentum dolor sed justo
            efficitur, eget tempus augue dictum. Vivamus eget est at dolor
            posuere malesuada id in quam. Phasellus aliquet feugiat placerat.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default WhatWeDo
