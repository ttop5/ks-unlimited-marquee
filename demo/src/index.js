import React, { Component } from 'react';
import {render} from 'react-dom';

import UnlimitedMarquee from '../../src';


class Demo extends Component {
  render() {
    const data = [
      { url: 'https://github.com/ttop5/blog/issues/1', desc: '1111111111111111111111111111111111' },
      { url: 'https://github.com/ttop5/blog/issues/2', desc: '2222222222222222222222222222222222' },
      { url: 'https://github.com/ttop5/blog/issues/3', desc: '3333333333333333333333333333333333' },
      { url: 'https://github.com/ttop5/blog/issues/4', desc: '4444444444444444444444444444444444' },
      { url: 'https://github.com/ttop5/blog/issues/5', desc: '5555555555555555555555555555555555' },
      { url: 'https://github.com/ttop5/blog/issues/6', desc: '6666666666666666666666666666666666' },
      { url: 'https://github.com/ttop5/blog/issues/7', desc: '7777777777777777777777777777777777' },
      { url: 'https://github.com/ttop5/blog/issues/8', desc: '8888888888888888888888888888888888' },
      { url: 'https://github.com/ttop5/blog/issues/9', desc: '9999999999999999999999999999999999' },
    ];
    const height = '120px';
    const width = '250px';

    return (
      <div>
        <UnlimitedMarquee
          data={data}
          height={height}
          width={width}
        />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'));
