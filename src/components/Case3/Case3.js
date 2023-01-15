import React from 'react';
import './Case3.scss';

/** 子元件 */
class Case3Children extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onChildClick}>
        子節點點擊
      </button>
    );
  }
}

class Case3 extends React.Component {

  constructor(props) {
    super(props);
    // 是否打開
    this.state = {
      isToggleOn: true
    };
    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.handleClick = this.handleClick.bind(this);
  }

  // 寫法一 點集事件
  handleClick(e) {
    console.log(e)
    console.log(this)
  }

  // 寫法二 public class field   這個語法確保 `this` 是在 handleClick2 中被綁定。
  handleClick2 = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      <div>
        <Case3Children onChildClick={this.handleClick}/>
        {/* <button onClick={this.handleClick}>
          Click me
        </button> */}
        {/* 避免這種寫法 會建立一個不同的callback */}
        {/* <button onClick={(e) => this.handleClick(e)}>
          Click me
        </button> */}
      </div>


    );
  }
}
export default Case3;
