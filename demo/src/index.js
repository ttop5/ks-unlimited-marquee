import React, { Component } from 'react';
import {render} from 'react-dom';

import UnlimitedMarquee from '../../src';


class Demo extends Component {
  render() {

    return (
      <div>
        <UnlimitedMarquee />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'));
