import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand " href="/">
            Navbar
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/some">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/some">
                  Todo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page">
                  next page
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;
