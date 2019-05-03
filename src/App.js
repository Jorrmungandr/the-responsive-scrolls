import React, { Component } from 'react';
import './App.scss';
import ResponsiveNavbar from './components/respons-nav/respons-nav.jsx';
import HyperResponsiveNavbar from './components/respons-nav/hyper-respons-nav.jsx';
import ResponsiveCurve from './components/respons-curve/respons-curve.jsx';
import ResponsiveWave from './components/respons-wave/respons-wave.jsx';
import Navbar from './components/navbar/navbar.jsx';
import ResponsiveBelzierCurve from './components/respons-belzier-curve/respons-belzier-curve';


class ResponsiveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventX: 0,
      eventY: 0,
      isMouseDown: false,
      eventTarget: '',
      belzierCoords: {
        Ax: '',
        Ay: '',
        Bx: '',
        By: '',
        Cx: '',
        Cy: '',
      }
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
    // else if (this.state.isMouseDown && this.state.eventTarget.className.split('-')[0] === 'bottom') {
    //   document.querySelector('.responsive-curve').style.height = (this.state.eventY - 302) + 'px';
    //   console.log(document.querySelectorAll('.top-resizer')[2].scrollTop);
    //   console.log(event.clientY);
    // }
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
        <ResponsiveNavbar handleMouseDown={this.handleMouseDown.bind(this)} />
        <HyperResponsiveNavbar handleMouseDown={this.handleMouseDown.bind(this)} />
        <ResponsiveCurve handleMouseDown={this.handleMouseDown.bind(this)} />
        <ResponsiveWave handleMouseDown={this.handleMouseDown.bind(this)} />
        {/* <ResponsiveBelzierCurve handleMouseDown={this.handleMouseDown.bind(this)}/>  */}
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
