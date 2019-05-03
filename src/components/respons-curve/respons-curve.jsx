import React, { Component } from 'react';
import './respons-curve.scss'

export default class ResponsiveCurve extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Responsive Curve:</p>
        <div>
          <div class="top-resizer"></div>
          <div class="responsive-curve">
            <div class="left-resizer"></div>
            <div class="curve-container">
              <div id="curve"></div>
            </div>
            <div class="right-resizer" onMouseDown={this.props.handleMouseDown}></div>
          </div>
          <div class="bottom-resizer"></div>
        </div>
      </div>
    )
  }
}