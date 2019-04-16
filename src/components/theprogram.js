import React from "react"
import ProgramCard from "./programcard"
import circle1 from "../images/circle-1.svg"
import circle2 from "../images/circle-2.svg"
import circle3 from "../images/circle-3.svg"
import circle4 from "../images/circle-4.svg"

import "./bootstrap.min.css"

const TheProgram = () => (
  <section className="container px-5">
    <div className="d-flex mx-auto" style={{ flexDirection: "row" }}>
      <div className="row">
        <div className="col">
          <ProgramCard
            number={1}
            color={"#FF3B3B"}
            circleSVG={circle1}
            title={"Set Goals"}
          />
          <ProgramCard
            number={2}
            color={"#0045FF"}
            circleSVG={circle2}
            title={"Create A Plan Of Action"}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProgramCard
            number={3}
            color={"#FF7600"}
            circleSVG={circle3}
            title={"Meet Weekly For Excercises"}
          />
          <ProgramCard
            number={4}
            color={"#45D65B"}
            circleSVG={circle4}
            title={"Analyze Results"}
          />
        </div>
      </div>
    </div>
  </section>
)

export default TheProgram
