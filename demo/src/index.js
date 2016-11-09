import React, { Component } from 'react';
import {render} from 'react-dom';

import UnlimitedMarquee from '../../src';


class Demo extends Component {
  render() {
    const content = (
      <ul>
          <li>This is the text line 0</li>
          <li>This is the text line 1</li>
          <li>This is the text line 2</li>
          <li>This is the text line 3</li>
          <li>This is the text line 4</li>
          <li>This is the text line 5</li>
          <li>This is the text line 6</li>
          <li>This is the text line 7</li>
          <li>This is the text line 8</li>
          <li>This is the text line 9</li>
      </ul>
    );
    return (
      <div>
        <UnlimitedMarquee
          content={content}
        />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'));
