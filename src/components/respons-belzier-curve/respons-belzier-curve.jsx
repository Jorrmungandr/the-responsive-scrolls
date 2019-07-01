import React, { Component } from 'react';
import './respons-belzier-curve.scss';

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
            <svg viewBox="0 0 300 50" class="belzier-curve-container">
              <path d="M0,0 Q150,100 300,0 Z" id="belzier-curve"/>
            </svg>
            <div class="right-resizer belzier-resizer" onMouseDown={this.props.handleMouseDown}></div>
          </div>
          <div class="bottom-resizer" onMouseDown={this.props.handleMouseDown}></div>
        </div>
      </div>
    )
  }
}