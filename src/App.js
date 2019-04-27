import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class ResponsiveContainer extends Component {
  render() {
    return (
      <div class="responsive-container">

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
