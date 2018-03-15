import React, { Component } from 'react';
import Shot from './Shot';
import data from '../data/data';

class Shots extends Component {  
  render() {
    return (
      <section>
        <div className='container'>
          <div className='shots'>
            {data.map(function(dribb){
              return <Shot info={dribb} key={dribb.key}/>
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Shots;