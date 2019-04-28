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

  handleMouseMove(event) {
    this.setState({
      eventX: event.clientX,
      eventY: event.clientY,
    });
    if (this.state.isMouseDown) {
      this.state.eventTarget.parentElement.parentElement.style.width = (this.state.eventX - (window.innerWidth / 4) + 'px');
    }
  }

  handleMouseDown(event) {
    this.setState({
      isMouseDown: true,
      eventTarget: event.target,
    })
    console.log('mousedown');
  }

  handleMouseUp(event) {
    this.setState({
      isMouseDown: false,
    })
    console.log('mouseup');
  }

  render() {
    return (
      <div id="ette" onMouseUp={this.handleMouseUp.bind(this)} onMouseMove={this.handleMouseMove.bind(this)}>
        <div class="responsive-container">
          <div>
            <p>Responsive Navbar:</p>
            <div class="top-resizer"></div>
            <div class="responsive-component" id="responsive-navbar">
              <div class="left-resizer"></div>
              <a>One</a>
              <a>Two</a>
              <a>Three</a>
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
