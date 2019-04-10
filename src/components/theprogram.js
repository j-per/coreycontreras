import React from "react"
import ProgramCard from "./programcard"

import "./theprogram.css"

const TheProgram = () => (
  <section className="theprogram-wrapper">
    <ProgramCard number={1} color={"#FF3B3B"} />
    <ProgramCard number={2} color={"#0045FF"} />
    <ProgramCard number={3} color={"#FF7600"} />
    <ProgramCard number={4} color={"#45D65B"} />
  </section>
)

export default TheProgram
