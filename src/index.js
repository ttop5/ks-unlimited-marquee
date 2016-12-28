import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import './style.css';

class UnlimitedMarquee extends Component {
  static propTypes = {
    content: PropTypes.node.isRequired,
    gap: PropTypes.number,
    speed: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
  }

  static defaultProps = {
    gap: 0,
    speed: 10,
    width: '300px',
    height: '300px',
    content: (
      <div>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
        <h1>haha</h1>
      </div>
    )
  }

  componentDidMount() {
    const { gap, speed } = this.props;
    const scrollContent = document.querySelector('#scrollContent');
    const scrollDiv1 = document.querySelector('#scrollDiv1');
    const scrollDiv2 = document.querySelector('#scrollDiv2');

    function Marquee() {
      console.log('fuck');
      if (scrollDiv2.offsetTop - scrollContent.scrollTop <= gap) {
        scrollContent.scrollTop -= scrollDiv1.offsetHeight;
      }
      scrollContent.scrollTop ++;
      console.log(scrollContent.scrollTop);
    }

    let MyMar = setInterval(Marquee, speed);
    scrollContent.onmouseover = function StartScroll() {
      clearInterval(MyMar);
    };

    scrollContent.onmouseout = function StopScroll() {
      MyMar = setInterval(Marquee, speed);
    };
  }

  render() {
    const { width, height, content } = this.props;
    return (
      <div>
        <div id='scrollContent' style={{ width, height }} className="wrap">
          <div id='scrollDiv1'>
            {this.props.content}
          </div>
          <div id='scrollDiv2'>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default UnlimitedMarquee;
