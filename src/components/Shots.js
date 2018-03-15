import React, { Component } from 'react';
import Shot from './Shot';


class Shots extends Component {  
  render() {
    return (
      <section>
        <div className='container'>
          <div className='shots'>
            <Shot />
            <Shot />
            <Shot />
          </div>
        </div>
      </section>
    );
  }
}

export default Shots;