//import { Link } from "gatsby"
import React from "react"

import "./bootstrap.min.css"

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light  bg-light ">
    <a className="navbar-brand" href="#">
      Corey Contreras
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            What We Do
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            The Program
          </a>
        </li>
        <button
          type="button"
          className="btn btn-warning"
          style={{ margin: "0 15px" }}
        >
          Request Consultation
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
