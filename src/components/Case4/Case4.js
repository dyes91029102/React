import React from 'react';
import './Case4.scss';

function LoginComponent(props) {
  return (
    <button onClick={props.onClick}>
      登入
    </button>
  );
}


function LogoutComponent(props) {
  return (
    <button onClick={props.onClick}>
      登出
    </button>
  );
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

// 警告bar
function WarningBanner(props) {
  if (!props.warn) {
    console.log('隱藏bar')
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Case4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      unreadMessages: ['brook', 'brook2'],
      warn: false
    };

    // 綁定this
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  /** 登入 */
  handleLoginClick(e) {
    console.log('登入');
    this.setState({
      isLogin: true,
      unreadMessages: [],
      warn: true
    });
  }

  /** 登出 */
  handleLogoutClick(e) {
    console.log('登出');
    this.setState({
      isLogin: false,
      unreadMessages: ['Brook'],
      warn: false
    });
  }


  render() {
    let button = !this.state.isLogin ?
      <LoginComponent onClick={this.handleLoginClick} /> :
      <LogoutComponent onClick={this.handleLogoutClick} />;
    return (
      <div>
        <Mailbox  unreadMessages={this.state.unreadMessages}/>
        <WarningBanner warn={this.state.warn}/>
        {this.state.isLogin}
        {button}
      </div>
    );
  }
}


export default Case4;
