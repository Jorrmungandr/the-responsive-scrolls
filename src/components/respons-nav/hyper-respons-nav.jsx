import React, { Component } from 'react';
import './respons-nav.scss'

export default class HyperResponsiveNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>Hyper Responsive Navbar:</p>
          <div>
            <div class="top-resizer top-hyper-resizer" ></div>
            <div class="responsive-navbar" id="hyper-responsive-navbar">
              <div class="left-resizer"></div>
              <a>One</a>
              <a>Two</a>
              <a>Three</a>
              <div class="right-resizer" onMouseDown={this.props.handleMouseDown}></div>
            </div>
            <div class="bottom-resizer"></div>
          </div>
      </div>
    )
  }
}