import React, { Component } from 'react';

class Shot extends Component {
  render() {
    return (
      <article>
        <div>
          <div className='shot'>
            <picture>
              <img src='https://cdn.dribbble.com/users/23795/screenshots/2241261/open-uri20150912-3-14makg2_1x' />
            </picture>
            <section>
              <ul className='stats'>
                <li>
                  <i className='fa fa-eye'></i> 28,328
                </li>
                <li>
                  <i className='fa fa-comment'></i> 10
                </li>
                <li>
                  <i className='fa fa-heart'></i> 862
                </li>
              </ul>
            </section>
          </div>
          <footer className='author'>
            <a href='#'>
              <picture>
                <img src='https://cdn.dribbble.com/users/519846/avatars/mini/8010008dd2de026ecb0f23a48226b5f5.png?1413748190' />
              </picture>
              <span>Musixmatch</span>
            </a>
          </footer>
        </div>
      </article>
    );
  }
}

export default Shot;