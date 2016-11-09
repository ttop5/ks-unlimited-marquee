import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

import './style.css';


class UnlimitedMarqueeItem extends Component {
  static propTypes = {
    dataItem: PropTypes.object.isRequired,
  }

  render() {
    const { dataItem } = this.props;

    return (
      <div className="item-div">
        <a className="item-a" href={dataItem.url} target="_blank" title={dataItem.desc}>{dataItem.desc}</a>
      </div>
    );
  }
}

export default UnlimitedMarqueeItem;
