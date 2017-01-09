import React, { Component } from 'react';
import {render} from 'react-dom';

import UnlimitedMarquee from '../../src';


class Demo extends Component {
  render() {
    const content = (
      <ul>
        <li>新闻1</li>
        <li>新闻2</li>
        <li>新闻3</li>
        <li>新闻4</li>
        <li>新闻5</li>
        <li>新闻6</li>
        <li>新闻7</li>
        <li>新闻8</li>
        <li>新闻9</li>
        <li>新闻10</li>
        <li>新闻11</li>
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
