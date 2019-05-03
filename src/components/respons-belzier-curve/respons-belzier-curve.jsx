import React, { Component } from 'react';
import './respons-belzier-curve';

export default class ResponsiveBelzierCurve extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Responsive Quadratic Belzier Curve:</p>
        <div>
          <div class="top-resizer"></div>
          <div class="responsive-belzier-curve">
            <div class="left-resizer"></div>
            <div>
              <svg height="100" class="belzier-curve-container">
                <path d="M150 0 L75 200 L225 200 Z" id="belzier-curve" />
              </svg>
            </div>
            <div class="right-resizer belzier-resizer" onMouseDown={this.props.handleMouseDown}></div>
          </div>
          <div class="bottom-resizer"></div>
        </div>
      </div>
    )
  }
}