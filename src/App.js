import React, { Component } from 'react';
import './App.scss';

class ResponsiveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventX: 0,
      eventY: 0,
      isMouseDown: false,
      eventTarget: '',
    }
  }

  handleResize(event) {
    this.setState({
      eventX: event.clientX,
      eventY: event.clientY,
    });
    if (this.state.isMouseDown && this.state.eventTarget.className.split('-')[0] === 'right') {
      this.state.eventTarget.parentElement.parentElement.style.width = (this.state.eventX - (window.innerWidth / 4) + 'px');
      if (this.state.eventTarget.parentElement.id === 'hyper-responsive-navbar') {
        document.querySelector('#hyper-responsive-navbar').style.fontSize = (document.querySelector('.top-hyper-resizer').clientWidth * 2.5) / 100 + 'px';
      }
    } 
    else if (this.state.isMouseDown && this.state.eventTarget.className.split('-')[0] === 'bottom') {
      document.querySelector('.responsive-curve').style.height = (this.state.eventY - 302) + 'px';
      console.log(document.querySelectorAll('.top-resizer')[2].scrollTop);
      console.log(event.clientY);
    }
  }

  handleMouseDown(event) {
    this.setState({
      isMouseDown: true,
      eventTarget: event.target,
    });
  }

  handleMouseUp(event) {
    this.setState({
      isMouseDown: false,
    })
    // console.log('mouseup');
  }

  render() {
    return (
      <div id="ette" onMouseUp={this.handleMouseUp.bind(this)} onMouseMove={this.handleResize.bind(this)}>
        <div class="responsive-container">
          <p>Responsive Navbar:</p>
          <div>
            <div class="top-resizer"></div>
            <div class="responsive-navbar" id="standart-responsive-navbar">
              <div class="left-resizer"></div>
              <a>One</a>
              <a>Two</a>
              <a>Three</a>
              <div class="right-resizer" onMouseDown={this.handleMouseDown.bind(this)}></div>
            </div>
            <div class="bottom-resizer"></div>
          </div>
          <p>Hyper Responsive Navbar:</p>
          <div>
            <div class="top-resizer top-hyper-resizer"></div>
            <div class="responsive-navbar" id="hyper-responsive-navbar">
              <div class="left-resizer"></div>
              <a>One</a>
              <a>Two</a>
              <a>Three</a>
              <div class="right-resizer" onMouseDown={this.handleMouseDown.bind(this)}></div>
            </div>
            <div class="bottom-resizer"></div>
          </div>
          <p>Responsive Curve:</p>
          <div>
            <div class="top-resizer"></div>
            <div class="responsive-curve">
              <div class="left-resizer"></div>
              <div class="curve-container">
                <div id="curve"></div>
              </div>
              <div class="right-resizer" onMouseDown={this.handleMouseDown.bind(this)}></div>
            </div>
            <div class="bottom-resizer" onMouseDown={this.handleMouseDown.bind(this)}></div>
          </div>
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
              <div class="right-resizer" onMouseDown={this.handleMouseDown.bind(this)}></div>
            </div>
            <div class="bottom-resizer"></div>
          </div>
        </div>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <div id="text-container">
          <a>Made with &lt;/&gt; and &hearts; by Jorrmungandr</a>
        </div>
        <div>
          <div class="menu"><a>Download</a></div>
          <div class="menu"><a>Search</a></div>
        </div>
      </div>
    );
  }
}

class Page extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ResponsiveContainer />
      </div>
    );
  }
}

export default Page;
