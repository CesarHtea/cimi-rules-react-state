import React, { Component } from 'react';
import Shots from './Shots';

class Container extends Component {
  render() {
    return (
      <header>
        <nav className='nav'>
          <ul className='nav__list'>
            <li>
              <a href='#'>All</a>
            </li>
            <li>
              <a href='#'>Popular</a>
            </li>
            <li>
              <a href='#'>Recent</a>
            </li>
            <li>
              <a href='#'>Debuts</a>
            </li>
          </ul>
        </nav>
        <Shots />
      </header>
    );
  }
}

export default Container;