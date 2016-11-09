# ks-unlimited-marquee

A unidirectional scrollable React component.


## Feature

 - Unlimited scrolling
 - Mouse events
 - Tooltip


## Install

```zsh
npm install ks-unlimited-marquee
```


## Usage

```javascript
import UnlimitedMarquee from 'ks-unlimited-marquee';


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
```


## Example

[https://ttop5.github.io/ks-unlimited-marquee/demo/dist](https://ttop5.github.io/ks-unlimited-marquee/demo/dist)


## API

| Name | Type | Default | Description |
| :----:  | :----:  | :----:  | :----: |
| data | Object[] |  | It is `necessary` data. Data structure: `[{url: '', desc: ''}...]` |
| height | String | 100px | scrollBox's height |
| width | String | 200px | scrollBox's width |
| gap | Number | 0 | Totop gap. If the component is not scrolling as you would expect, try to ajust it. |
| speed | Number | 100 | scrolling speed, `0 < speed <= 1000` |


## Development

```zsh
git clone https://github.com/ttop5/ks-unlimited-marquee.git
cd ks-unlimited-marquee
npm install
npm start
```


## License

ks-unlimited-marquee is released under the MIT license.
