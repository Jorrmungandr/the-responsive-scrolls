import React, { Component } from 'react';
import './respons-ball-menu.scss';
import { gelall } from '../../global/globalFuncs.js';

export default class ResponsiveBallMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target;

    let classArray = event.target.className.split(' ')

    if (classArray.indexOf('active') < 0) {
      [...gelall('.ball')].map((ball) => {
        let ballClass = ball.className;
        if (ballClass.indexOf('active') >= 0) {
          ball.className = ballClass.split(' active').join('');
        }
      });
      target.className += ' active';
    } 
    // else {
    //   target.className = target.className.split(' active').join('');
    // }
  }

  render() {
    return (
      <div>
        <p>Responsive Ball Menu:</p>
        <div>
          <div class="top-resizer"></div>
          <div class="responsive-ball-menu">
            <div class="left-resizer"></div>
            <div class="menu-container">
              <div class="ball-container ball-container-top">
                <div class="ball" onClick={this.handleClick}></div>
                <div class="ball active" onClick={this.handleClick}></div>
                <div class="ball" onClick={this.handleClick}></div>
              </div>
              <div class="ball-container ball-container-bottom">
                <div class="ball" onClick={this.handleClick}></div>
                <div class="ball" onClick={this.handleClick}></div>
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