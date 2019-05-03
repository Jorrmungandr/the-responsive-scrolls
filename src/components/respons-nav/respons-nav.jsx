import React, { Component } from 'react';
import './respons-nav.scss';

export default class ResponsiveNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>Responsive Navbar:</p>
          <div>
            <div class="top-resizer" ></div>
            <div class="responsive-navbar" id="standart-responsive-navbar">
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