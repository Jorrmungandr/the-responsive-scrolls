import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar.jsx';
import ResponsiveNavbar from './components/respons-nav/respons-nav.jsx';
import HyperResponsiveNavbar from './components/respons-nav/hyper-respons-nav.jsx';
import ResponsiveCurve from './components/respons-curve/respons-curve.jsx';
import ResponsiveWave from './components/respons-wave/respons-wave.jsx';
import ResponsiveBelzierCurve from './components/respons-belzier-curve/respons-belzier-curve.jsx';
import ResponsiveBallMenu from './components/respons-ball-menu/respons-ball-menu.jsx';
import { gel } from './global/globalFuncs.js'


class ResponsiveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventX: 0,
      eventY: 0,
      isMouseDown: false,
      eventTarget: '',
    }
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleResize(event) {
    this.setState({
      eventX: event.clientX,
      eventY: event.clientY,
    });

    let parent = this.state.eventTarget.parentElement;

    if (this.state.isMouseDown && this.state.eventTarget.className.indexOf('right-resizer') !== -1) {
      parent.parentElement.style.width = (this.state.eventX - (window.innerWidth / 4) + 8 + 'px');
      console.log(parent.parentElement);
      if (parent.id === 'hyper-responsive-navbar') {
        parent.style.fontSize = (gel('.top-hyper-resizer').clientWidth * 2.5) / 100 + 'px';
      }
    }
    else if (this.state.isMouseDown && this.state.eventTarget.className.indexOf('bottom-resizer') !== -1) {
      parent.style.height = (this.state.eventY - 302) + 'px';
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
  }

  render() {
    return (
      <div id="ette" onMouseUp={this.handleMouseUp.bind(this)} onMouseMove={this.handleResize.bind(this)}>
        <div class="responsive-container">
        <ResponsiveNavbar handleMouseDown={this.handleMouseDown} />
        <HyperResponsiveNavbar handleMouseDown={this.handleMouseDown} />
        <ResponsiveCurve handleMouseDown={this.handleMouseDown} />
        <ResponsiveBelzierCurve handleMouseDown={this.handleMouseDown}/> 
        <ResponsiveWave handleMouseDown={this.handleMouseDown} />
        <ResponsiveBallMenu handleMouseDown={this.handleMouseDown} />
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
