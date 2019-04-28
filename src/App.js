import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class ResponsiveContainer extends Component {
  render() {
    return (
      <div id="ette">
        <div class="responsive-container">
          <div class="responsive-component" id="responsive-navbar">
            <a>One</a>
            <a>Two</a>
            <a>Three</a>
          </div>
          <div class="responsive-component"></div>
          <div class="responsive-component"></div>
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
