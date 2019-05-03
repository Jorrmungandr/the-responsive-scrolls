import React, { Component } from 'react';
import './respons-wave.scss';

export default class ResponsiveCurve extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Responsive Waves:</p>
        <div>
          <div class="top-resizer"></div>
          <div class="responsive-waves">
            <div class="left-resizer"></div>
            <div class="waves-container">
              <div id="wave1-wrapper">
                <div id="wave1"></div>
              </div>
              <div id="wave2-wrapper">
                <div id="wave2"></div>
              </div>
            </div>
            <div class="right-resizer" onMouseDown={this.props.handleMouseDown}></div>
          </div>
          <div class="bottom-resizer"></div>
        </div>
      </div>
    )
  }
}