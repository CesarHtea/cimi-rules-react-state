import React, { Component } from 'react';

class Shot extends Component {
  render() {
    const currentObject = this.props.info
    return (
      <article>
        <div>
          <div className='shot'>
            <picture>
              <img src={currentObject.img} />
            </picture>
            <section>
              <ul className='stats'>
                <li>
                  <i className='fa fa-eye'></i> {currentObject.stats[0]}
                </li>
                <li>
                  <i className='fa fa-comment'></i>  {currentObject.stats[1]}
                </li>
                <li>
                  <i className='fa fa-heart'></i>  {currentObject.stats[2]}
                </li>
              </ul>
            </section>
          </div>
          <footer className='author'>
            <a href='#'>
              <picture>
                <img src={currentObject.author.avatar} />
              </picture>
              <span>{currentObject.author.name}</span>
            </a>
          </footer>
        </div>
      </article>
    );
  }
}

export default Shot;