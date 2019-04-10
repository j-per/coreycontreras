import React from "react"

import "./about.css"
import Corey from "../images/corey.jpg"

const About = () => (
  <section className="about-wrapper">
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h2>Meet Corey</h2>
        </div>
      </div>
      <div className="row ">
        <div className="col d-flex justify-content-center">
          <img src={Corey} alt="Corey" className="about-image" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
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
      <div className="row">
        <div className="col d-flex justify-content-center">
          <button type="button" className="btn btn-warning">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default About
