import React, { Component } from 'react';
import './respons-belzier-curve';

export default class ResponsiveBelzierCurve extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector('.responsive-belzier-curve').style.display = 'flex';
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
              <svg height="100%" width="100%" viewBox="0 0 100 50" style={{background: '#333',color: 'turquoise',}} class="belzier-curve-container">
                <path d="M0,0 Q50,100 100,0 Z" id="belzier-curve" fill="turquoise"/>
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