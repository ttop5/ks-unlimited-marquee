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

    return (
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
      <div>
        <UnlimitedMarquee
          content={content}
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

| Name | Type | Default | Description | isRequired|
| :----:  | :----:  | :----:  | :----: | :----: |
| speed | Number | 20 | scrolling speed, `0 < speed <= 1000` | false |
| content | element |  | element | true |


## Development

```zsh
git clone https://github.com/ttop5/ks-unlimited-marquee.git
cd ks-unlimited-marquee
npm install
npm start
```


## License

ks-unlimited-marquee is released under the MIT license.
