import React, { Component } from 'react';
import './respons-ball-menu.scss'

export default class ResponsiveBallMenu extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    const target = event.target;

    let classArray = event.target.className.split(' ')

    if (classArray.indexOf('active') < 0) {
      [...document.querySelectorAll('.ball')].map((ball) => {
        let ballClass = ball.className;
        if (ballClass.split(' ').indexOf('active') >= 0) {
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
                <div class="ball ball-1" onClick={this.handleClick.bind(this)}></div>
                <div class="ball ball-2 active" onClick={this.handleClick.bind(this)}></div>
                <div class="ball ball-3" onClick={this.handleClick.bind(this)}></div>
              </div>
              <div class="ball-container ball-container-bottom">
                <div class="ball ball-4" onClick={this.handleClick.bind(this)}></div>
                <div class="ball ball-5" onClick={this.handleClick.bind(this)}></div>
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