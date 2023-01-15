import React from 'react';
import './Case2.scss';

/** 時鐘 透過state 改變時間 */
class Clock extends React.Component {
  // 初始化
  constructor(props) {
    // 參考父層建構值 以利後續進行操作
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
      increment: 1
    };
    // console.log('建構值');
    // 設定鬧鐘
    setInterval(() => this.tick(), 3000)
  }

  // 計算時間
  tick() {
    // console.log('tick')

    // 錯誤寫法 因為 this.props 和 this.state 可能是非同步的被更新
    // this.setState({
    //   date: new Date(),
    //   counter: this.state.counter + this.props.increment
    // });

    // 正確寫法
    this.setState((state, props) => {
      return {
        date: new Date(),
        counter: state.counter + props.increment
      }
    }
    );

    // 實際上非同步
    // this.setState({
    //   date:new Date(),
    //   counter: this.state.counter + this.props.increment
    // },()=>{
    //   console.log(this.state.counter);
    // })
    // console.log(this.state.counter);
  }

  render() {
    console.log('改變')
    return (
      <div>
        <h1>counter: {this.state.counter}</h1>
        <h1>Hello, world!</h1>
        <h2>現在時間是 {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

/** 外部傳時間近來  */
// function Clock(props) {
//   // 無法自動產生時間
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>現在時間是 {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

class Case2 extends React.Component {
  render() {
    return (
      <div>
        {/* <Clock date={new Date()} /> */}
        <Clock increment={1} />
        <Clock increment={2} />

      </div>
    );
  }
}



export default Case2;
