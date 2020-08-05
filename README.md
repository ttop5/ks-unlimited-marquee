# ks-unlimited-marquee

A unidirectional scrollable React component.


## Feature

 - Unlimited scrolling
 - Mouse events
 - Tooltip


## Install

```zsh
npm install @ttop5/ks-unlimited-marquee
```


## Usage

```javascript
import UnlimitedMarquee from '@ttop5/ks-unlimited-marquee';


class Demo extends Component {
  render() {

    return (
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
