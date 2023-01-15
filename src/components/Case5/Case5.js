import React from 'react';
import './Case5.scss';


function NumberList(props) {
  const numbers = props.numbers;
  // 建議不要用索引當作key 避免後續state 影響
  // const listItems = numbers.map((number, index) =>
  //   <li key={index}>{number}</li>
  // );

  // 正確應該有個物件id
  const listItems = numbers.map((number, index) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <div>
      範例1
      <ul>{listItems}</ul>
    </div>
  );
}

/** 不同層 同id */
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

/** 範例2 */
function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <div>
      範例2
      <ul>
        {/* {listItems} */}
        {
          numbers.map((number) => {

            return <li key={number.toString()}>{number}</li>;
          })
        }
      </ul>
    </div>

  );
}

class Case5 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let numbers = [1, 2, 3, 4, 5];

    let posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
      { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];

    return (
      <div>
        <NumberList numbers={numbers} />
        <Blog posts={posts} />
        <NumberList2 numbers={numbers} />
      </div>
    );
  }
}


export default Case5;
