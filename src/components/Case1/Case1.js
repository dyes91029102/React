import React from 'react';
import './Case1.scss';
import avatar from './../../images/avatar.png';


class Welcome extends React.Component {
  render() {
    return (

      <h1>Hello,{this.props.name}</h1>
    );
  }
}

/** Function */
// function Case1(props) {
//   return (
//     <div className="Case1">
//       Case3 Component
//     </div>
//   );
// }

/** 頭像 */
function Avatar(props) {
  return (
    <div >
      <img 
        className="avatar"
        alt={props.author.name}
        src={props.author.avatarUrl}
      />
      <div >
        {props.author.name}
      </div>
    </div>
  );
}

/** component  */
class Case1 extends React.Component {

  // 宣告物件
  comment = {
    author: {
      name: 'Brook',
      avatarUrl: avatar
    }
  };
  render() {
    return (
      <div>
        <Welcome name="Brook" />
        <Welcome name="Sara" />
        {/* <div>
            <Avatar author={this.comment.author}/>
        </div> */}
      </div>
    );
  }
}
export default Case1;
