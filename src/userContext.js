import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    userName: "bob123",
  };
  changeUserName = (userName) => {
    this.setState({ userName: userName });
    console.log(userName);
  };
  render() {
    return (
      <Provider
        value={{
          userName: this.state.userName,
          changeUserName: this.changeUserName,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { UserContextProvider, Consumer as UserContextConsumer };
