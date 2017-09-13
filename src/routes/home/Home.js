import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Masonry Example</h1>

          <XMasonry>
            <XBlock width={2}>
              <div className="card">
                <h1>Simple Card</h1>
                <p>Any text!</p>
              </div>
            </XBlock>
            <XBlock width={1}>
              <div className="card" style={{height: '300px'}}>
                <h1>Wider card 1</h1>
                <p>Any text!</p>
              </div>
            </XBlock>
            <XBlock width={1}>
              <div className="card" style={{height: '300px'}}>
                <h1>Wider card 2</h1>
                <p>Any text!</p>
              </div>
            </XBlock>
            <XBlock width={1}>
              <div className="card" style={{height: '300px'}}>
                <h1>Wider card 3</h1>
                <p>Any text!</p>
              </div>
            </XBlock>
            <XBlock width={2}>
              <div className="card" style={{height: '300px'}}>
                <h1>Wider card 4</h1>
                <p>Any text!</p>
              </div>
            </XBlock>
          </XMasonry>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
